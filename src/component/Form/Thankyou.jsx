import React, { useContext } from "react";
import thankyouIcon from "../../assets/icon-thank-you.svg";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Language";
import { drawStyle } from "./styles";

const Thankyou = () => {
  const { localization } = useContext(LanguageContext);

  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-center mt-28">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">Thank you!</div>
      <p className="text-[#9699ab] text-[14px] w-96">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support. Please feel free to email us at
        zainkazi27@gmail.com
      </p>
      <Link to="/" className={drawStyle.buttonBase}>
        {localization.notFound.backToHome}
      </Link>
    </div>
  );
};

export default Thankyou;
