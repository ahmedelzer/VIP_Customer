import { useEffect, useState } from "react";
import BranchesByLocationMap from "../component/BranchesByLocationMap";
import logo from "../assets/logoHum.png";
import PartnerSection from "../component/PartnerSection";
import Staff from "../component/Staff";
import { useParams } from "react-router-dom";

function Home() {
  const { name } = useParams();
  console.log("====================================");
  console.log(name, "name");
  console.log("====================================");
  const branches = [
    {
      CompanyID: 12345,
      CompanyName: "Tech Innovations Ltd.",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.106472",
      LocationLongitudePoint: "30.751160",
      ProfileImage: logo,
    },
    {
      CompanyID: 12346,
      CompanyName: "Creative Solutions Inc.",
      AddressLocationID: 67891,
      CompanyBranchID: 54322,
      Address: "456 Innovation Ave., San Francisco, CA",
      LocationLatitudePoint: "37.7749",
      LocationLongitudePoint: "-12.4195",
      ProfileImage: logo,
    },
  ];

  const [userLocation, setUserLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [nearestBranch, setNearestBranch] = useState(null);

  useEffect(() => {
    // Fetch user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setUserLocation([userLat, userLon]);

          if (!selectedLocation) {
            calculateNearestBranch(userLat, userLon);
          }
        },
        (error) => {
          console.error("Error fetching location:", error);
          // Fallback to a default location
          setUserLocation([30.0444, 31.2357]); // Example: Default to Cairo
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
      // Fallback to a default location
      setUserLocation([30.0444, 31.2357]); // Example: Default to Cairo
    }
  }, []);

  useEffect(() => {
    if (selectedLocation) {
      const [lat, lon] = selectedLocation;
      calculateNearestBranch(lat, lon);
    } else if (userLocation) {
      const [lat, lon] = userLocation;
      calculateNearestBranch(lat, lon);
    }
  }, [selectedLocation, userLocation]);

  const calculateNearestBranch = (lat, lon) => {
    const nearest = branches.reduce((closest, branch) => {
      const branchLat = parseFloat(branch.LocationLatitudePoint);
      const branchLon = parseFloat(branch.LocationLongitudePoint);
      const distance = calculateDistance(lat, lon, branchLat, branchLon);

      if (!closest || distance < closest.distance) {
        return { ...branch, distance };
      }
      return closest;
    }, null);

    setNearestBranch(nearest);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  return (
    <div className="w-full container !bg-body z-0 text-center mx-auto">
      <PartnerSection
        partners={branches}
        setSelectedLocation={setSelectedLocation}
      />
      {userLocation && (
        <BranchesByLocationMap
          branches={branches}
          userLocation={userLocation}
          nearestBranch={nearestBranch}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      )}
      <Staff />
    </div>
  );
}

export default Home;
