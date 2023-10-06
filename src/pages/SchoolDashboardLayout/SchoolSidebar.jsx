import { NavLink } from "react-router-dom";
import "./style/SchoolSidebar.css";

// images
import HomeIcon from "./images/Home.svg";
import StatisticsIcon from "./images/Statistics.svg";
import SettingsIcon from "./images/Settings.svg";

const SchoolSidebar = () => {
  const menuItems = [
    {
      path: "/dashboard/school_profile",
      name: "School Profile",
      icon: HomeIcon,
    },
    {
      path: "/dashboard/statistics",
      name: "Statistics",
      icon: StatisticsIcon,
    },
    {
      path: "/dashboard/settings",
      name: "Settings",
      icon: SettingsIcon,
    },
  ];
  return (
    <div className="school_sidebar">
      <div className="menu_box">
        {menuItems.map((item, index) => (
          <NavLink to={item.path}>
            <div className="side_items" activeClassName="active" key={index}>
              <img src={item.icon} alt={item.name} title={item.name} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SchoolSidebar;
