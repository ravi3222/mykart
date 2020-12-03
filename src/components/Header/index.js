import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Logo from "./../../assets/logo2.jpg";
import { auth } from "./../../firebase/utils";

function Header({ user }) {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="MYKART LOGO" />
          </Link>
        </div>
        <div className="header__options">
          {user && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}>LogOut</span>
              </li>
            </ul>
          )}

          {!user && (
            <ul>
              <li>
                <Link className="header__optionsLink" to="/register">
                  Register
                </Link>
              </li>
              <li>
                <Link className="header__optionsLink" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
