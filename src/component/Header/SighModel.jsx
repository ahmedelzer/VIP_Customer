import { RegistrationContext } from "../../context/Registration";
import React, { useContext, useState } from "react";
import { onApply } from "../DynamicPopup/OnApplay";
import FormContainer from "../DynamicPopup/FormContainer";
import personalInfoSchema from "../../Schemas/StepsFrom/parsonalInfo.json";
import LoginFormSchema from "../../Schemas/LoginSchema/LoginFormSchema.json";
import VerifyPersonSchemaAction from "../../Schemas/StepsFrom/VerifyPersonSchemaAction.json";
import { drawStyle } from "../Form/styles";
import { LanguageContext } from "../../context/Language";
import {
  Button,
  Modal,
  ModalBody as ReactstrapModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { browserActionsStyle } from "../Form/inputs/InputActions/styles";
export const SighModel = ({ modalOpen, setModalOpen }) => {
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
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
        setModalOpen(false);
        // Navigate to the home page on successful request
        // navigate("/");
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
    <Modal isOpen={modalOpen} toggle={toggleModal}>
      <form onSubmit={onSubmit}>
        <ModalHeader id="form-dialog-title" className="text-black">
          {/* {personalInfoSchema.dashboardFormSchemaInfoDTOView.addingHeader} */}
        </ModalHeader>
        <ReactstrapModalBody>
          <FormContainer
            tableSchema={personalInfoSchema}
            row={{}}
            returnRow={() => {}}
            errorResult={result}
          />
        </ReactstrapModalBody>
        <ModalFooter>
          <Button
            className={browserActionsStyle.modalButton}
            onClick={toggleModal}
          >
            {localization.browser.modal.button.cancel}
          </Button>
          <Button
            className={browserActionsStyle.modalFooterButton}
            // name={fieldName}
            disabled={disable}
            type="submit"
          >
            {/* {localization.formSteps.popup.done} */}
            get VIP
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
