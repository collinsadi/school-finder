import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import codellins from "codellins"
// stylesheet
import "./style/SignInModal.css";



// images
import Logo from "./images/SignIn.png";
import CancelIcon from "./images/cancel.svg";
import EmailIcon from "./images/email.svg";
import PasswordIcon from "./images/password.svg";
// import Google from "./images/Google.svg";
// import { NavLink } from "react-router-dom";
import { apiUrl } from "../../config";

const SignInModal = ({ setOpenSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  // Sign in submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    // if(email === "" || password === ""){
    //   setErrorMessage(true);
    // }else{
    //   navigate("/search_page");
    // }
setIsLoading(true)
    const response = await fetch(apiUrl + "/school/login", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email: email,
        password:password
      })
    })

    const data = await response.json()

    if (!data.status) {
      setIsLoading(false)
      setError(true);
      setErrorMessage(data.message);
    } else {
      setIsLoading(false)
      setError(false);
      codellins.Cookies.set('jwt', data.school.token, 7);
      localStorage.setItem("email",data.school.email)
      localStorage.setItem("name",data.school.name)
      localStorage.setItem("phone",data.school.phone)
      localStorage.setItem("website",data.school.website)
      localStorage.setItem("image",data.school.registrationDocs)
      navigate("/dashboard/school_profile");
    }
    

  };


  
  return (
    <div className="sign_in_overlay">
      <div className="cancel">
        <img
          src={CancelIcon}
          alt="cancel"
          onClick={() => setOpenSignIn(false)}
        />
      </div>
      <div className="sign_in_container">
        <div className="sign_in_header">
          <img src={Logo} alt="Logo" />
          <p>Welcome Back!</p>
        </div>
        <form className="sign_in_form">
          <div className="inner_form">
            <img src={EmailIcon} alt="Email" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="inner_form">
            <img src={PasswordIcon} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          {error ? (
            <div className="error">{ errorMessage }</div>
        ) : null}
          <button  onClick={handleSignIn}>{ isLoading? "Hold on.." : "Login"}</button>
        </form>
        {/* <div className="or">
          <hr></hr>
          <span>or</span>
          <hr></hr>
        </div>
        <NavLink to="/register">
          <button className="google_login">
            <img src={Google} alt="Google" />
            <p>Register with Gmail</p>
          </button>
        </NavLink> */}
      </div>
    </div>
  );
};

export default SignInModal;
