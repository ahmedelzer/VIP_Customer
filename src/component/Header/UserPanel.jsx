import { RegistrationContext } from "../../context/Registration";
import { LanguageContext } from "../../context/Language";
import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { RiVipLine } from "react-icons/ri";
function UserPanel({ useTheme = true }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { localization } = useContext(LanguageContext);
  const { personalInfo, isSigh } = useContext(RegistrationContext);

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
  }
  // if (!isSigh) {
  //   return <></>;
  // }
  console.log("====================================");
  console.log();
  console.log("====================================");
  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className="relative z-50" // Ensures the dropdown is in front
    >
      <DropdownToggle
        tag="div"
        className="mx-2 flex items-center cursor-pointer"
      >
        <RiVipLine
          size={40}
          className="text-text border p-2 rounded-lg !border-text mx-2"
        />
        {personalInfo.firstName && (
          <p className="font-bold text-md text-text">
            {personalInfo.firstName + " " + personalInfo.lastName}
          </p>
        )}
      </DropdownToggle>
    </Dropdown>
  );
}

export default UserPanel;
