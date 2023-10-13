import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import Logo from "../../assets/logos/header-logo.png";
import Access from "../../assets/icons/access.png";
import AccessTwo from "../../assets/images/access-two.png";
import Arrow from "../../assets/icons/Arrow.svg";
import "./Header.scss";
import LayoutModule from "../layoutModule";

const Header: React.FC = () => {
  const [active, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <div className="header-container">
      <div className="mx">
        <div className="header-wrapper">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="access" onClick={handleToggle}>
            <img src={Access} alt="" />
            <p>Access</p>
          </div>
        </div>
      </div>
      {active && (
        <LayoutModule handleToggle={handleToggle} className="layout-module">
          <div className="close-icon" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="access-modal">
            <div className="responsive-img">
              <img src={AccessTwo} alt="" className="responsive-access-img" />
            </div>
            <h2>Enroll now to get access.</h2>
            <img src={AccessTwo} alt="" className="access-img" />
          </div>
          <a
            href="https://main-lander.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="enroll">
              <h5>Enroll now!</h5>
              <img src={Arrow} alt="" />
            </div>
          </a>
        </LayoutModule>
      )}
    </div>
  );
};

export default Header;
