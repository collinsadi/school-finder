import { useState, useContext } from "react";
import codellins from "codellins";
import { useNavigate } from "react-router-dom";


// stylesheet
import "./style/Register.css";

import { SignInContext } from "../../Contexts/SignInContext";

// components
import SignInModal from "../../components/Navbar/SignInModal";

// images
import Ecllipse from "./images/ecllipse.png";
import Logo from "../../components/Navbar/images/Logo.svg";
import School from "./images/school.svg";
import Gmail from "./images/gmail.svg";
import Phone from "./images/phone.svg";
import Password from "./images/password.svg";
import Website from "./images/website.svg";
import { NavLink } from "react-router-dom";
import { apiUrl } from "../../config";


const Register = () => {
  const { openSignIn, setOpenSignIn } = useContext(SignInContext);
  const [schoolName, setSchoolName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [schoolWebsite, setSchoolWebsite] = useState("")
  const [schoolImage, setSchoolImage] = useState("")


  const navigate = useNavigate();


  const createSchool = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      
     return alert("Passwords So not Match")
    }

    const response = await fetch(apiUrl + "/school/signup", {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name: schoolName,
        email: email,
        phone:phone, 
        password: password,
        website: schoolWebsite,
        registrationDocs:schoolImage
      })
    })

    const data = await response.json()
    if(data.status){

      codellins.Cookies.set("jwt", data.school.token, 30)
      localStorage.setItem("email",data.school.email)
      localStorage.setItem("name",data.school.name)
      localStorage.setItem("phone",data.school.phone)
      localStorage.setItem("website",data.school.website)

      navigate("/dashboard/school_profile");
    }

   console.log(data)

  }

  const uploadImage = (e) => {
    
    const fr = new FileReader()

    fr.readAsDataURL(e.target.files[0])
    fr.addEventListener("load",()=>{
      setSchoolImage(fr.result);

      localStorage.setItem("image",fr.result)

    })


  }

  return (
    <main className="register">
      <div className="register_container">
        <img src={Ecllipse} alt="Ecllipse" className="ecllipse" />
        <div className="register_header">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <h1>Register your school</h1>
        </div>
        <form className="register_form">
          <div className="inner_form inner_register_form">
            <div className="input_content">
              <img src={School} alt="school" />
              <input value={schoolName} onChange={(e)=> setSchoolName(e.target.value)} type="text" placeholder="School Name" required />
            </div>
            <div className="input_content">
              <input type="text" placeholder="I’m the School.." required />
            </div>
          </div>
          <div className="inner_form inner_register_form">
            <div className="input_content">
              <img src={Gmail} alt="Gmail" />
              <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Gmail" required />
            </div>
            <div className="input_content">
              <img src={Phone} alt="Phone" />
              <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" placeholder="Phone Number" required />
            </div>
          </div>
          <div className="inner_form inner_register_form">
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Create Password" required />
            </div>
            <div className="input_content">
              <img src={Password} alt="Password" />
              <input value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required />
            </div>
          </div>
          <div className="school_website">
            <img src={Website} alt="image" />
            <input value={schoolWebsite} onChange={(e)=> setSchoolWebsite(e.target.value)} type="text" placeholder="School Website" required />
          </div>
          <div className="upload_cert">
            <input onChange={uploadImage} type="file" name="" id="" required />
            <p>
              <span>Uplaod </span>School Image
            </p>
          </div>
          <button onClick={createSchool}>Create School Account</button>
        </form>
        <p className="login_route">
          Already have an account on SchoolLocator?{" "}
          <span
            onClick={() => {
              setOpenSignIn(true);
            }}
          >
            Login
          </span>
        </p>
      </div>
      {openSignIn && <SignInModal setOpenSignIn={setOpenSignIn} />}
    </main>
  );
};

export default Register;
