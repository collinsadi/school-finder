import { NavLink } from "react-router-dom";

// images
import HomeIcon from "./images/Home.svg";
import DocumentIcon from "./images/Document.svg";
import Avatar from "./images/Avatar.svg";

const AdminSidebar = () => {
  const AdminMenuItems = [
    {
      path: "/admin/registered_schools",
      name: "Schools",
      icon: HomeIcon,
    },
    {
      path: "/admin/document_verification",
      name: "Document",
      icon: DocumentIcon,
    },
    {
      path:"/admin/admin_profile",
      name: "Admin Profile",
      icon: Avatar,
    }
  ];
  return (
    <div className="school_sidebar">
      <div className="menu_box">
        {AdminMenuItems.map((item, index) => (
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

export default AdminSidebar;
