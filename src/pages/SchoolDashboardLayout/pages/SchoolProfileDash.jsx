// stylesheet
import "./style/SchoolProfileDash.css";

// images
import ProfileHero from "./images/ProfileHero.png";
import ProfilePicture from "./images/ProfilePicture.svg";

// components
import ProfileNav from "./components/ProfileNav";
import { Outlet } from "react-router-dom";
  const image = localStorage.getItem("image")



const SchoolProfileDash = () => {
  const name = localStorage.getItem("name")
  const mottor = localStorage.getItem("motto")? localStorage.getItem("motto") : ""
  return (
    <div className="profile_dash">
      <div className="profile_dash_header">
        <h1>School Profile</h1>
      </div>
      <div className="profile_hero">
        <img src={ProfileHero} alt="Profile Hero" />
        <div className="profile_hero_info">
          <img src={image} alt="image" />
          <div className="profile_info_content">
            <h3>{ name}</h3>
            <p>Motto: {mottor} </p>
          </div>
        </div>
      </div>
      <ProfileNav/>
      <Outlet/>
    </div>
  );
};

export default SchoolProfileDash;
