import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Logo from "./../../assets/logo2.jpg";

function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="MYKART LOGO" />
          </Link>
        </div>
        <div className="header__options">
          <ul>
            <li>
              <Link to="register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
