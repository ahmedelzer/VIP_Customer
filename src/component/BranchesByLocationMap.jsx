import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { staffStyles } from "./styles";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BranchesByLocationMap = ({ branches, person }) => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const handleMapClick = (e, branch) => {
    setSelectedBranch(branch);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        // Disabled this functionality for unchangeable markers
      },
    });
    return null;
  };

  return (
    <div style={{ flexGrow: 1 }} className="flex-1">
      <MapContainer
        center={
          branches.length > 0
            ? [
                +branches[0].LocationLatitudePoint,
                +branches[0].LocationLongitudePoint,
              ]
            : [30.032957707631663, 31.2599301782983]
        }
        zoom={3}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClickHandler />
        {branches.map((branch) => (
          <CustomMarker
            key={branch.CompanyBranchID}
            branch={branch}
            img={
              branch.ProfileImage
              // <CustomImage
              //   img={branch.ProfileImage || "https://via.placeholder.com/50"}
              //   upperImage={branch.ProfileImage}
              // />
            }
            handleMapClick={handleMapClick}
          />
        ))}
      </MapContainer>
    </div>
  );
};
const CustomImage = ({ img, upperImage }) => {
  return (
    <div style={{ position: "relative", width: "50px", height: "50px" }}>
      {/* Overlay image (optional) */}
      {upperImage && (
        <img
          src={upperImage}
          alt="Upper Layer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            opacity: 0.5, // Adjust opacity as needed
          }}
        />
      )}
      {/* Base image */}
      <img
        src={img}
        alt="Base Layer"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%", // Makes the image circular
          zIndex: 0,
        }}
      />
    </div>
  );
};

const CustomMarker = ({ branch, img, handleMapClick }) => {
  const customIcon = new L.Icon({
    iconUrl: img,
    iconSize: [50, 50], // Adjust width and height
    iconAnchor: [25, 50], // Adjust anchor point
    popupAnchor: [0, -50],
  });

  return (
    <Marker
      position={[+branch.LocationLatitudePoint, +branch.LocationLongitudePoint]}
      eventHandlers={{
        click: (e) => handleMapClick(e, branch),
      }}
      icon={customIcon} // Apply the custom icon here
    >
      <Popup>
        <div className={staffStyles.cardContainer} key={branch.PersonID}>
          <div className={staffStyles.card}>
            <div className={staffStyles.imageWrapper}>
              <div className={staffStyles.imageInner}>
                <img
                  src={branch.ProfileImage || "https://via.placeholder.com/50"}
                  className={staffStyles.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover", // Ensure proper scaling
                    borderRadius: "50%", // Fallback for rounded style
                  }}
                  alt={`${branch.FirstName} ${branch.LastName}`}
                />
              </div>
            </div>
            <div className={staffStyles.content}>
              <h5 className={staffStyles.name}>
                {branch.FirstName + " " + branch.LastName}
              </h5>
              <p className={staffStyles.role}>{branch.MemberTypeName}</p>
              <ul className={staffStyles.socialIcons}>
                {/* Social media icons go here */}
              </ul>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default BranchesByLocationMap;
