// stylesheet
import "./style/SchoolDashboardLayout.css";

// components
import SchoolSidebar from "./SchoolSidebar";

// Outlet
import { NavLink, Outlet } from "react-router-dom";

// Images
import Logo from "./images/Logo.svg";

const SchoolDashboard = () => {
  return (
    <div className="school_dashboard">
      <div className="school_dashboard_header">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="school_dashboard_container">
        <SchoolSidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SchoolDashboard;
