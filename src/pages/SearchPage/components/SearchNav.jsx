import "../style/SearchNav.css";

// images
import Logo from "../images/Logo.svg";
// import Avatar from "../images/Avatar.png";
import { NavLink } from "react-router-dom";

const SearchNav = () => {
  return (
    <div className="search_nav">
      <div className="left_searchnav">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
        </div>
      </div>
      <div className="right_searchnav">
        {/* <img src={Avatar} alt="Avatar" /> */}
        <NavLink to="/register">
          <button>Add School</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SearchNav;
