import { useEffect, useState } from "react";
import BranchesByLocationMap from "../component/BranchesByLocationMap";
import logo from "../assets/logoHum.png";
import PartnerSection from "../component/PartnerSection";
import Staff from "../component/Staff";

function Home() {
  const branches = [
    {
      CompanyID: 1,
      CompanyName: "Al-Serag Store",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "14 شارع السلام _ ميدان قصر الثقافة",
      LocationLatitudePoint: "28.106472",
      LocationLongitudePoint: "30.751160",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/16.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/18SW7EsTCt/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 2,
      CompanyName: "Bon Bon",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.206472",
      LocationLongitudePoint: "30.851160",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/4.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/g/181AXzr2C7/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 3,
      CompanyName: "Chanel",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.107107",
      LocationLongitudePoint: "30.751278",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/11.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/profile.php?id=100064185428263&mibextid=JRoKGi",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 4,
      CompanyName: "Dot.Store",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.106472",
      LocationLongitudePoint: "30.751160",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/10.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/18AFiEj4MH/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 5,
      CompanyName: "Famous",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.108326",
      LocationLongitudePoint: "30.750847",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/17.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/18MAG9RBgV/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 6,
      CompanyName: "جرام فضة",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.106683",
      LocationLongitudePoint: "30.751288",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/7.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/153cQhrCwQ/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 7,
      CompanyName: "ٌRehani",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.0977924",
      LocationLongitudePoint: "30.756335",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/6.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/rayhan.perfumes1?mibextid=ZbWKwL",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 8,
      CompanyName: "Nono Store",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.116472",
      LocationLongitudePoint: "30.751160",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/5.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/groups/nonooutletstore",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 9,
      CompanyName: "Mr-Gift",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.108327",
      LocationLongitudePoint: "30.750847",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/12.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/g/15WuShLcCT/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 10,
      CompanyName: "Mr-Gift2",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.106144",
      LocationLongitudePoint: "30.750559",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/13.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/g/15WuShLcCT/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 11,
      CompanyName: "Twelve Cafe ",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.106684",
      LocationLongitudePoint: "30.751288",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/8.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/14vKkAATh3/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 12,
      CompanyName: "شذا",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.095963",
      LocationLongitudePoint: "30.757969",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/1.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/1AsNutyApz/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 12,
      CompanyName: "شذا",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.096413",
      LocationLongitudePoint: "30.758642",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/2.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/1AsNutyApz/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
    {
      CompanyID: 13,
      CompanyName: "A&E",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "28.095963",
      LocationLongitudePoint: "30.757969",
      ProfileImage:
        "https://maingatewayapi.ihs-solutions.com:8000/BrandingMart/archivingFiles/3.jpg",
      CompanyBranchContacts: [
        {
          id: 0,
          iconType: "facebook",
          link: "https://www.facebook.com/share/1AsNutyApz/?mibextid=wwXIfr",
        },
        { id: 1, iconType: "phone", link: "00201001750063" },
      ],
      //Contacts:{}
    },
  ];
  // const { images } =
  // Function to calculate the distance between two lat/lng points using the Haversine formula
  function calculateDistance1(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 1000; // Distance in meters
  }

  // Function to adjust position if two branches are too close to each other
  function adjustBranchPositions(branches) {
    const minDistance = 100; // Minimum distance in meters to trigger adjustment

    for (let i = 0; i < branches.length; i++) {
      for (let j = i + 1; j < branches.length; j++) {
        const lat1 = parseFloat(branches[i].LocationLatitudePoint);
        const lon1 = parseFloat(branches[i].LocationLongitudePoint);
        const lat2 = parseFloat(branches[j].LocationLatitudePoint);
        const lon2 = parseFloat(branches[j].LocationLongitudePoint);

        const distance = calculateDistance1(lat1, lon1, lat2, lon2);

        // If branches are too close, adjust their position
        if (distance < minDistance) {
          // Example adjustment: Shift the second branch by a small amount
          branches[j].LocationLatitudePoint = (lat2 + 0.0001).toFixed(6);
          branches[j].LocationLongitudePoint = (lon2 + 0.0001).toFixed(6);
        }
      }
    }

    return branches;
  }

  // Example usage
  const adjustedBranches = adjustBranchPositions(branches);

  console.log(adjustedBranches);

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
    if (userLocation) {
      const [lat, lon] = userLocation;
      calculateNearestBranch(lat, lon);
    }
  }, [userLocation]);

  const calculateNearestBranch = (lat, lon) => {
    const nearest = branches.reduce((closest, branch, index) => {
      const branchLat = parseFloat(branch.LocationLatitudePoint);
      const branchLon = parseFloat(branch.LocationLongitudePoint);
      const distance = calculateDistance(lat, lon, branchLat, branchLon);

      // Add new property 'placeIndex' to each branch
      const branchWithIndex = { ...branch, distance, placeIndex: index };

      if (!closest || distance < closest.distance) {
        return branchWithIndex;
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
  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = branches.map((branch) =>
        fetch(branch.ProfileImage)
          .then((response) => {
            if (!response.ok) {
              console.log(response);
              throw new Error(`Failed to fetch image: ${response.status}`);
            }
            return response.blob();
          })
          .then((blob) => URL.createObjectURL(blob))
          .catch((error) => {
            console.error("Error fetching the image:", error);
            return null; // Return null for failed requests
          })
      );

      // Wait for all image fetches to complete
      const imageUrls = await Promise.all(imagePromises);

      // Filter out any null results (failed requests)
      const validImages = imageUrls.filter((url) => url !== null);

      // setFileSrc(validImages); // Store all image URLs in state
    };

    fetchImages();
  }, []);

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
