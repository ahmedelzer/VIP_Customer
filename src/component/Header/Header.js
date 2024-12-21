import React, { useContext, useState } from "react";
import Logo from "../../assets/logoHum.png";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CartContext, LanguageContext } from "../../context/Language";
import LanguageSelector from "./LanguageSelector";
import { headerStyles } from "./style";
import UserPanel from "./UserPanel";
import { SighModel } from "./SighModel";
function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(window.location.pathname);
  const { localization } = useContext(LanguageContext);
  console.log("====================================");
  console.log(localization.userPanel.avatarUrl);
  console.log("====================================");
  function ChangePage(e) {
    setSelectedPage(e.target.title);
  }
  return (
    <div className="!bg-primary ">
      <header className={headerStyles.container}>
        <div className={headerStyles.headerWrapper}>
          <div className={headerStyles.logoWrapper}>
            <Link to="/">
              <img src={Logo} className={headerStyles.logoImage} alt="Logo" />
            </Link>
          </div>
          <div className={headerStyles.logoWrapper}>
            <button to="/signup" onClick={() => setModalOpen(true)}>
              {/* <img
              src={localization.userPanel.avatarUrl}
              className="w-10 h-10 rounded-lg mx-2"
              alt="User Avatar"
            /> */}
              <UserPanel useTheme={true} />
            </button>
            <LanguageSelector className="mx-2" />
          </div>
        </div>
      </header>
      <SighModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default Header;
