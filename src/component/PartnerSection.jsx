import React from "react";
import { headerStyles } from "./Header/style";

function PartnerSection({ partners }) {
  return (
    <div className="flex flex-row">
      {partners.map((partner) => (
        <img
          src={partner.ProfileImage}
          className={headerStyles.logoImage + " mx-2"}
          alt="Logo"
        />
      ))}
    </div>
  );
}

export default PartnerSection;
