import React from "react";

// Outlet
import { NavLink, Outlet } from "react-router-dom";

// images
import Logo from "./images/Logo.svg";

// components
import AdminSidebar from "./AdminSidebar";

const AdminDashboardLayout = () => {
  return (
    <div className="school_dashboard">
      <div className="school_dashboard_header">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="school_dashboard_container">
        <AdminSidebar/>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
