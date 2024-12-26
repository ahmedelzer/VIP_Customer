import { useEffect } from "react";
import { useMap } from "react-leaflet";

export const AdjustMapView = ({ userLocation, nearestBranch }) => {
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
