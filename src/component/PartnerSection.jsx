import React from "react";
import { partnerStyles } from "./Header/style";
import { onMarkerClick } from "../utils/onMarkerClick";
// import { partnerStyles } from "./PartnerSection/style";

function PartnerSection({ partners, setSelectedLocation }) {
  return (
    <div className={partnerStyles.container}>
      <div className="border p-3 !border-primary rounded-lg overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-body hover:scrollbar-thumb-body">
        <div className={partnerStyles.partnersWrapper}>
          {partners.map((partner) => (
            <div
              key={partner.CompanyID}
              className={partnerStyles.partnerItem}
              onClick={
                () => setSelectedLocation(partner)
                // onMarkerClick(map, partner)
              }
            >
              <img
                src={partner.ProfileImage}
                alt="Partner Logo"
                className={partnerStyles.logoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
