import React from "react";
import { partnerStyles } from "./Header/style";
// import { partnerStyles } from "./PartnerSection/style";

function PartnerSection({ partners }) {
  return (
    <div className={partnerStyles.container}>
      <div className={partnerStyles.partnersWrapper}>
        {partners.map((partner) => (
          <div className={partnerStyles.partnerItem} key={partner.CompanyID}>
            <img
              src={partner.ProfileImage}
              alt="Partner Logo"
              className={partnerStyles.logoImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;
