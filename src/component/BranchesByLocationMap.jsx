import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { staffStyles } from "./styles";
import { MdLocationSearching } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const BranchesByLocationMap = ({
  branches,
  userLocation,
  nearestBranch,
  selectedLocation,
  setSelectedLocation,
}) => {
  const AdjustMapView = ({ userLocation, nearestBranch }) => {
    const map = useMap();

    useEffect(() => {
      if (userLocation && nearestBranch) {
        const bounds = L.latLngBounds([
          userLocation,
          [
            parseFloat(nearestBranch.LocationLatitudePoint),
            parseFloat(nearestBranch.LocationLongitudePoint),
          ],
        ]);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [userLocation, nearestBranch, map]);

    return null;
  };
  const handleMapClick = (e, branch) => {
    // setSelectedLocation(branch);
  };
  const selectedBranch =
    selectedLocation !== null ? selectedLocation : userLocation;
  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      {/* Get My Location Button */}
      <button
        onClick={() => setSelectedLocation(null)}
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 1000,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
        }}
        className="bg-"
      >
        {selectedBranch === selectedLocation ? (
          <MdLocationSearching size={20} />
        ) : (
          <MdMyLocation size={20} />
        )}
      </button>

      <MapContainer
        center={userLocation}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <AdjustMapView
          userLocation={userLocation}
          nearestBranch={nearestBranch}
        />
        {/* User Location */}
        <Marker
          position={userLocation}
          icon={L.icon({
            iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            iconSize: [30, 30],
          })}
        >
          <Popup>You are here!</Popup>
        </Marker>
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
        {nearestBranch && (
          <CustomMarker
            branch={nearestBranch}
            img={
              nearestBranch.ProfileImage
              // <CustomImage
              //   img={branch.ProfileImage || "https://via.placeholder.com/50"}
              //   upperImage={branch.ProfileImage}
              // />
            }
            handleMapClick={handleMapClick}
          />
        )}
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
      position={[
        parseFloat(+branch.LocationLatitudePoint),
        parseFloat(+branch.LocationLongitudePoint),
      ]}
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
