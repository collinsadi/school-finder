import { useState,useContext } from "react";

// stylesheet
import "./style/Navbar.css";

import {SignInContext} from "../../Contexts/SignInContext";

// react icons
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

// Import Use Ref
import { useRef } from "react";

// Nav link
import { NavLink } from "react-router-dom";

// Images
import Logo from "./images/Logo.svg";
import Menu from "./images/menu.svg";
import DropDown from "./images/arrow-down.svg";

// components
import SignInModal from "./SignInModal";

const Navbar = () => {


  // Navbar open and close function
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  // context
  const {openSignIn,setOpenSignIn} = useContext(SignInContext);

  return (
    <div className="Navbar">
      <div className="container">
        <header>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </NavLink>
          <nav ref={navRef}>
            <NavLink to="" onClick={closeNavbar}>
              About
            </NavLink>
            <NavLink to="" onClick={closeNavbar}>
              <p className="drop_down">Schools</p>
              <img src={DropDown} alt="Dropdown" />
            </NavLink>
            <div className="mobile_user">
              <p
                onClick={() => {
                  setOpenSignIn(true);
                  closeNavbar;
                }}
              >
                Sign In
              </p>
              <NavLink to="/register"><button>Add School</button></NavLink>
            </div>
            <button
              className="nav-btn nav-close-btn"
              onClick={closeNavbar}
              style={{ color: "#174B60", fontSize: "32px" }}
            >
              <AiOutlineClose />
            </button>
          </nav>
          <div className="right_nav">
            <p
              onClick={() => {
                setOpenSignIn(true);
              }}
            >
              Sign In
            </p>
            <NavLink to="/register"><button>Add School</button></NavLink>
          </div>
          <button className="nav-btn" onClick={showNavbar}>
            <img src={Menu} alt="Menu" />
          </button>
        </header>
      </div>
      {openSignIn && <SignInModal setOpenSignIn={setOpenSignIn} />}
    </div>
  );
};

export default Navbar;
