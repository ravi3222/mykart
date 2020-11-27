import React from "react";
import "./styles.scss";
import Logo from "./../../assets/logo2.jpg";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="MYKART LOGO" />
        </div>
      </div>
    </header>
  );
}

export default Header;
