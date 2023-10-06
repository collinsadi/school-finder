import { useState, useContext } from "react";

// stylesheet
import "./syles/Hero.css";

// images
import UserImage from "./images/users.png";
import Card1 from "./images/card1.png";
import Card2 from "./images/card2.png";
import Card3 from "./images/card3.png";
import Decore from "./images/Decore.svg";
import GoogleMapIcon from "./images/googleMap.svg";

// react router
import { NavLink } from "react-router-dom";

import { SignInContext } from "../../../../Contexts/SignInContext";

// components
import SignUpModal from "../../../../components/Navbar/SignUpModal";

const Hero = () => {
  const { openSignUp, setOpenSignUp } = useContext(SignInContext);
  return (
    <>
      <section className="hero">
        <div className="left_hero">
          <h4>With just a single click, you can</h4>
          <h1>
            Find the Best
            <span className="special_text">
              <img src={Decore} alt="dash" />
            </span>
          </h1>
          <h1> School Anywhere In The World.</h1>
          <p>
            Explore Highly Recommended Schools Near You for a Brighter Future in
            Education. Discover Excellence Today
          </p>
          <div className="users">
            <img src={UserImage} alt="User Image" />
            <p>Student Who Used SchoolFinder </p>
          </div>
        </div>
        <div className="right_hero">
          <img src={Card1} alt="image" className="card1" />
          <img src={Card3} alt="image" className="card2" />
          <img src={Card2} alt="image" className="card3" />
        </div>
      </section>
      <div className="search">
        <div className="search_input">
          <img src={GoogleMapIcon} alt="map" />
          <input type="text" placeholder="Find School By Name, Country" />
        </div>
        <NavLink>
          <button onClick={() => setOpenSignUp(true)}>Find School</button>
        </NavLink>
      </div>
      {openSignUp && <SignUpModal setOpenSignUp={setOpenSignUp} />}
    </>
  );
};

export default Hero;
