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
import { SiGooglemaps } from "react-icons/si";
import { GetIconContact } from "./GetIconContact";
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
  const groupedBranches = branches.reduce((acc, branch) => {
    const key = `${branch.LocationLatitudePoint},${branch.LocationLongitudePoint}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(branch);
    return acc;
  }, {});
  const handleLocationClick = (latitude, longitude) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;

    // Check if the `navigator.share` API is supported (for mobile)
    if (navigator.share) {
      navigator
        .share({
          title: "Open Location",
          text: "Choose an app to view this location:",
          url: googleMapsUrl,
        })
        .catch((error) => console.error("Error sharing location:", error));
    } else {
      // Fallback: Prompt user for app choice
      const userChoice = window.confirm(
        "Open in Google Maps? Cancel to use Apple Maps."
      );

      if (userChoice) {
        window.open(googleMapsUrl, "_blank");
      } else {
        window.open(appleMapsUrl, "_blank");
      }
    }
  };
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
        {Object.values(groupedBranches).map((group, index) => {
          return group.map((branch, i) => {
            const angle = i * 15; // Adjust angle to avoid overlap
            return (
              <CustomMarker
                key={branch.CompanyBranchID}
                branch={branch}
                img={branch.ProfileImage || "https://via.placeholder.com/50"}
                handleMapClick={handleMapClick}
                angle={angle} // Pass angle to adjust icon rotation
              />
            );
          });
        })}
        {/* {branches.map((branch) => (
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
        ))} */}
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
            handleMapClick={handleLocationClick}
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

const CustomMarker = ({ branch, img, handleMapClick, angle }) => {
  // const customIcon = new L.Icon({
  //   iconUrl: img,
  //   iconSize: [50, 50], // Adjust width and height
  //   iconAnchor: [25, 50], // Adjust anchor point
  //   popupAnchor: [0, -50],
  // });
  const customIcon = L.divIcon({
    html: `
      <div class="w-[30px] h-[30px] p-0.5 flex items-center justify-center border border-card !bg-primary overflow-hidden rounded-full opacity-50"
        style="transform: rotate(${angle}deg);">
        <img 
          src="${img}" 
          alt="Marker" 
          style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" />
      </div>
    `,
    className: "", // No default leaflet class
    iconSize: [30, 30],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  }); //!localization
  return (
    <Marker
      position={[
        parseFloat(+branch.LocationLatitudePoint),
        parseFloat(+branch.LocationLongitudePoint),
      ]}
      eventHandlers={{
        click: () =>
          handleMapClick(
            branch.LocationLatitudePoint,
            branch.LocationLongitudePoint
          ),
      }}
      icon={customIcon} // Apply the custom icon here
    >
      <Popup>
        <div className={staffStyles.cardContainer} key={branch.PersonID}>
          <div className={staffStyles.card}>
            <div className={staffStyles.imageWrapper + " mt-2"}>
              {/* <div className={staffStyles.imageInner}> */}
              {/* </div> */}
            </div>
            <div className={staffStyles.content}>
              <img
                src={img || "https://via.placeholder.com/50"}
                className={staffStyles.image}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover", // Ensure proper scaling
                  borderRadius: "50%", // Fallback for rounded style
                }}
                alt={`${branch.CompanyName}`}
              />
              <h5 className={staffStyles.name + " text-center"}>
                {branch.CompanyName}
              </h5>
              <ul className={staffStyles.socialIcons + " my-1"}>
                {branch.CompanyBranchContacts.map((contact) => (
                  <a
                    href={contact.link}
                    key={contact.id}
                    className={staffStyles.icon + " !text-text"}
                  >
                    {GetIconContact(contact.iconType, 20)}
                  </a>
                ))}
                {/* Social media icons go here */}
              </ul>
              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${branch.LocationLatitudePoint},${branch.LocationLongitudePoint}`,
                    "_blank"
                  )
                }
                className="!capitalize"
              >
                <SiGooglemaps
                  size={30}
                  className="text-text text-center mt-2"
                />
              </button>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
export default BranchesByLocationMap;
