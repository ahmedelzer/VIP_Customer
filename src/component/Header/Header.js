import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logoHum.png";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CartContext, LanguageContext } from "../../context/Language";
import LanguageSelector from "./LanguageSelector";
import { headerStyles } from "./style";
import UserPanel from "./UserPanel";
import { SighModel } from "./SighModel";
import Theme from "./Theme";
function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const { localization } = useContext(LanguageContext);
  useEffect(() => {
    if (name) {
      const timer = setTimeout(() => {
        navigate("/"); // Navigate to home after closing modal
      }, 10000);
      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [name, navigate]);
  return (
    <div className="!bg-primary ">
      <header className={headerStyles.container}>
        <div className={headerStyles.headerWrapper}>
          <div className={headerStyles.logoWrapper}>
            <Link to="/">
              <img src={Logo} className={headerStyles.logoImage} alt="Logo" />
            </Link>
          </div>
          <div className={headerStyles.navListWrapper}>
            {name && (
              <h2 className="text-xl font-bold text-secondText">
                {localization.VIP_customer.header.welcome} {name}
              </h2>
            )}
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
            <Theme />
            <LanguageSelector className="mx-2" />
          </div>
        </div>
      </header>
      <SighModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default Header;
