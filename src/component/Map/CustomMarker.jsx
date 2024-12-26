import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L, { map } from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { staffStyles } from "../styles";
import { onMarkerClick } from "../../utils/onMarkerClick";
import React from "react";
import { GetIconContact } from "../GetIconContact";
import { SiGooglemaps } from "react-icons/si";
const CustomMarker = ({ branch, img, angle, selectedLocation }) => {
  const handleLocationClick = (latitude, longitude) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const appleMapsUrl = `http://maps.apple.com/?ll=${latitude},${longitude}`;
    console.log("appleMapsUrl", appleMapsUrl);

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
  const map = useMap();

  // Focus on the selected location if it changes
  useEffect(() => {
    if (selectedLocation) {
      // console.log(selectedLocation);

      onMarkerClick(map, selectedLocation);
    }
  }, [selectedLocation, map]);
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
  // const handleAddressClick = (latitude, longitude, address) => {
  //   const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  //   const googleMapsAppUrl = `geo:${latitude},${longitude}?q=${encodeURIComponent(
  //     address
  //   )}`;

  //   // Show options to the user
  //   const userChoice = window.confirm(
  //     "Would you like to open this location in the Google Maps app? Click 'Cancel' to open it in a browser."
  //   );

  //   if (userChoice) {
  //     // Open in Google Maps app (if on mobile)
  //     window.location.href = googleMapsAppUrl;
  //   } else {
  //     // Open in browser
  //     window.open(googleMapsUrl, "_blank");
  //   }
  // };
  const openLocationInMaps = (latitude, longitude) => {
    const geoUrl = `geo:${latitude},${longitude}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      // Try opening in Google Maps app
      const timeout = setTimeout(() => {
        // Fallback to browser if the scheme fails
        window.open(googleMapsUrl, "_blank");
      }, 1000); // Wait for 1 second before falling back

      // Attempt to open the `geo:` scheme
      window.location.href = geoUrl;

      // Clear the timeout if navigation is successful
      window.addEventListener("blur", () => clearTimeout(timeout));
    } else {
      // Fallback for desktops or unsupported devices
      window.open(googleMapsUrl, "_blank");
    }
  };

  // Usage Example
  const handleAddressClick = (latitude, longitude) => {
    console.log("handleAddressClick");

    openLocationInMaps(latitude, longitude);
  };

  return (
    <Marker
      position={[
        parseFloat(+branch.LocationLatitudePoint),
        parseFloat(+branch.LocationLongitudePoint),
      ]}
      eventHandlers={{
        click: () => onMarkerClick(map, branch),
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
              <h5 className={staffStyles.name + " text-center !mb-0"}>
                {branch.CompanyName}
              </h5>
              <div className="flex justify-between">
                <button
                  className="!capitalize flex justify-center items-center cursor-pointer"
                  onClick={() =>
                    // handleLocationClick(
                    //   branch.LocationLatitudePoint,
                    //   branch.LocationLongitudePoint
                    // )
                    handleAddressClick(
                      branch.LocationLatitudePoint,
                      branch.LocationLongitudePoint
                    )
                  }
                >
                  <SiGooglemaps
                    size={20}
                    className="text-text text-center mx-1"
                  />
                </button>
                <p className={"text-sm text-text"}>{branch.Address}</p>
              </div>
              <ul className={staffStyles.socialIcons + " my-1"}>
                {branch.CompanyBranchContacts.map((contact) => {
                  if (contact.iconType === "phone") {
                    return (
                      <a
                        href={`tel:${contact.link}`}
                        key={contact.id}
                        target="_blank"
                        className={
                          staffStyles.icon + " !text-text cursor-pointer"
                        }
                      >
                        {GetIconContact(contact.iconType, 20)}
                        {/* <div className="flex items-center justify-around">
                            {GetIconContact(contact.iconType, 20)}
                            <div className="inline-flex !p-0 !mx-1 !text-secondText">
                              {contact.link}
                            </div>
                          </div> */}
                        {/* <p className="mx-0.5"></p> */}
                      </a>
                    );
                  } else
                    return (
                      <a
                        href={contact.link}
                        key={contact.id}
                        target="_blank"
                        className={
                          staffStyles.icon + " !text-text cursor-pointer"
                        }
                      >
                        {GetIconContact(contact.iconType, 20)}
                      </a>
                    );
                })}

                {/* Social media icons go here */}
              </ul>
              <div className="!capitalize flex justify-center items-center cursor-pointer"></div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};
export default CustomMarker;
