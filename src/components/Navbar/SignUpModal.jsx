import "./style/SignUpModal.css";

// images
import CancelIcon from "./images/cancel.svg";
import SingleLogo from "./images/SingleLogo.svg";

// Nav link
import { NavLink } from "react-router-dom";

const SignUpModal = ({ setOpenSignUp }) => {
  return (
    <div className="sign_up_overlay">
      <div className="cancel sign_up_cancel">
        <img
          src={CancelIcon}
          alt="cancel"
          onClick={() => setOpenSignUp(false)}
        />
      </div>
      <div className="sign_up_container">
        <div className="left_sign_up">
          <div className="sign_up_header">
            <img src={SingleLogo} alt="Logo" />
            <h3>Welcome!</h3>
          </div>
          <h1>
            Find The <span>Best</span> School For You
          </h1>
          <div className="signup_buttons">
            <NavLink to="/register">
              <button className="school_owner">I’m a School Owner</button>
            </NavLink>
            <NavLink to="">
              <button className="school_finder">I’m a School Finder</button>
            </NavLink>
          </div>
        </div>
        <div className="right_sign_up"></div>
      </div>
    </div>
  );
};

export default SignUpModal;
