import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FormContainer from "../component/DynamicPopup/FormContainer";
import personalInfoSchema from "../Schemas/StepsFrom/parsonalInfo.json";
import LoginFormSchema from "../Schemas/LoginSchema/LoginFormSchema.json";
import VerifyPersonSchemaAction from "../Schemas/StepsFrom/VerifyPersonSchemaAction.json";
import { drawStyle } from "../component/Form/styles";
import { LanguageContext } from "../context/Language";
import { Button } from "reactstrap";
import { RegistrationContext } from "../context/Registration";
import { onApply } from "../component/DynamicPopup/OnApplay";

function SignUP() {
  const navigate = useNavigate(); // Initialize navigate hook
  const { isSigh, setIsSigh, personalInfo, setPersonalInfo } =
    useContext(RegistrationContext);
  const [margeRow, setMargeRow] = useState(personalInfo);
  const { localization } = useContext(LanguageContext);

  const [result, setResult] = useState({});
  const [disable, setDisable] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setDisable(true);
    try {
      const request = await onApply(
        formJson,
        null,
        true,
        VerifyPersonSchemaAction,
        LoginFormSchema.projectProxyRoute
      );
      if (request && request.success === true) {
        setResult(request);

        setMargeRow({ ...margeRow, ...request.data, ...formJson });
        setPersonalInfo({ ...personalInfo, ...request.data, ...formJson });

        // Navigate to the home page on successful request
        navigate("/");
      }
    } catch (error) {
      console.error("API call failed:", error);
      // Optionally, handle the error here (e.g., show a notification)
    } finally {
      // Enable the button after the API call
      setDisable(false);
    }
  };

  return (
    <div className="mt-5 !bg-white">
      <form onSubmit={(e) => onSubmit(e)} action="" className="py-5 !bg-text">
        <FormContainer
          tableSchema={personalInfoSchema}
          row={{}}
          errorResult={result}
          returnRow={() => {}}
        />
        <div className={drawStyle.formContainer}>
          <Button
            type="submit"
            disabled={disable}
            className={drawStyle.buttonBase + " mx-3"}
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUP;
