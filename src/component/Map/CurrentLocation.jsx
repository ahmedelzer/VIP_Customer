import { onMarkerClick } from "../../utils/onMarkerClick";
import React, { useState } from "react";
import { MdLocationSearching, MdMyLocation } from "react-icons/md";
import { useMap } from "react-leaflet";

export default function CurrentLocation({ userLocation, isInCurrentLocation }) {
  const map = useMap();
  const [isButtonClicked, setIsButtonClicked] = useState(isInCurrentLocation);
  return (
    <button
      onClick={() => {
        onMarkerClick(map, {
          LocationLatitudePoint: userLocation[0],
          LocationLongitudePoint: userLocation[1],
        });
        setIsButtonClicked(true);
      }}
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
      {!isButtonClicked ? (
        <MdLocationSearching size={20} />
      ) : (
        <MdMyLocation size={20} />
      )}
      {/* {selectedBranch === selectedLocation ? (
      <MdLocationSearching size={20} />
    ) : (
      <MdMyLocation size={20} />
    )} */}
    </button>
  );
}
