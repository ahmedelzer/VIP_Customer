import React, { useContext, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";
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
import { LanguageContext } from "../context/Language";
import { onMarkerClick } from "../utils/onMarkerClick";
import { AdjustMapView } from "./Map/AdjustMapView.jsx";
import CustomMarker from "./Map/CustomMarker";
import CurrentLocation from "./Map/CurrentLocation";
const BranchesByLocationMap = ({
  branches,
  userLocation,
  nearestBranch,
  selectedLocation,
}) => {
  const { localization } = useContext(LanguageContext);
  const selectedBranch = userLocation;
  const groupedBranches = branches.reduce((acc, branch) => {
    const key = `${branch.LocationLatitudePoint},${branch.LocationLongitudePoint}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(branch);
    return acc;
  }, {});
  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      {/* Get My Location Button */}

      <MapContainer
        center={userLocation}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        attributionControl={false}
      >
        <CurrentLocation
          userLocation={userLocation}
          isInCurrentLocation={false}
        />
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
          <Popup>{localization.VIP_customer.map}</Popup>
        </Marker>
        {Object.values(groupedBranches).map((group, index) => {
          return group.map((branch, i) => {
            const angle = i * 15; // Adjust angle to avoid overlap
            return (
              <CustomMarker
                key={branch.CompanyBranchID}
                branch={branch}
                img={branch.ProfileImage || "https://via.placeholder.com/50"}
                angle={angle} // Pass angle to adjust icon rotation
                selectedLocation={selectedLocation}
              />
            );
          });
        })}
        {nearestBranch && (
          <CustomMarker
            branch={nearestBranch}
            img={nearestBranch.ProfileImage}
          />
        )}
      </MapContainer>
    </div>
  );
};
export default BranchesByLocationMap;
