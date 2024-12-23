import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
export const GetIconContact = (iconType, size) => {
  switch (iconType) {
    case "website":
      return <TbWorldWww size={size} />;
    case "facebook":
      return <FaFacebook size={size} />;
    case "instagram":
      return <FaInstagram size={size} />;
    case "tiktok":
      return <FaTiktok size={size} />;
    case "youtube":
      return <FaYoutube size={size} />;
    case "linkedin":
      return <FaLinkedin size={size} />;
    case "postOffice":
      return <MdLocalPostOffice size={size} />;
    case "home":
      return <FaHome size={size} />;
    case "phone":
      return <FaPhoneAlt size={size} />;
  }
};
