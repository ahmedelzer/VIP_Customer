import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

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
  }
};
