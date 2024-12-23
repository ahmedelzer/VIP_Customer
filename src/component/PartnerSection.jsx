import React from "react";
import { partnerStyles } from "./Header/style";
// import { partnerStyles } from "./PartnerSection/style";

function PartnerSection({ partners, setSelectedLocation }) {
  return (
    <div className={partnerStyles.container}>
      <div className="border p-3 !border-primary rounded-lg">
        <div className={partnerStyles.partnersWrapper}>
          {partners.map((partner) => (
            <div
              className={partnerStyles.partnerItem}
              key={partner.CompanyID}
              onClick={() =>
                setSelectedLocation([
                  partner.LocationLatitudePoint,
                  partner.LocationLongitudePoint,
                ])
              }
            >
              <img
                src={partner.ProfileImage}
                alt="Partner Logo"
                className={partnerStyles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
