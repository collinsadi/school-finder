import "../style//ProfileNav.css";
import { apiUrl } from "../../../../config";


// images
import RenameIcon from "../images/rename.svg";

// image
import map from "../images/Map.png";
import { useState } from "react";
import codellins from "codellins";

const ProfileNav = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [website, setWebsite] = useState(localStorage.getItem("website")?localStorage.getItem("website") : "")
  const [phone, setPhone] = useState(localStorage.getItem("phone")?localStorage.getItem("phone") : "")
  const [email, setEmail] = useState(localStorage.getItem("email")?localStorage.getItem("email") : "")
  const [address, setAddress] = useState(localStorage.getItem("address") ? localStorage.getItem("address") : "") 
  const [fee, setFee] = useState(localStorage.getItem("fees") ? localStorage.getItem("fees") : "")
  const [method, setMethod] = useState(localStorage.getItem("method") ? localStorage.getItem("method") : "")
  const [scholarship, setScholarship] = useState("")
  // const [admissionStart, setAdmissionStart] = useState("")
  // const [admissionEnd, setAdmissionEnd] = useState("")

  const editContact = async () => {
    
      setIsLoading(true)

    const response = await fetch(apiUrl + "/school/edit/contact", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${codellins.Cookies.get("jwt")}`
        
      },
      body: JSON.stringify({
        website: website,
        address: address,
        phone:phone,
        email:email
      })
    })

    const data = await response.json()

    if (data.status) {
      setIsLoading(false)
      
      localStorage.setItem("email",email)
      localStorage.setItem("phone",phone)
      localStorage.setItem("website",website)
      localStorage.setItem("address",address)
    }else{

      setIsLoading(false)

    }

    

  }

  const editFees = async () => {
    
    setIsLoading(true)

    const response = await fetch(apiUrl + "/school/edit/fees", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${codellins.Cookies.get("jwt")}`
        
      },
      body: JSON.stringify({
        fee: fee,
        method: method,
        scholarship:scholarship
      })
    })

    const data = await response.json()

    if (data.status) {
    setIsLoading(false)
      localStorage.setItem("fees",fee)
      localStorage.setItem("method",method)
      localStorage.setItem("scholarship",scholarship)
    } else {
    setIsLoading(false)
      
    }



  }

  return (
    <div className="profile_nav">
      <h3 className="profile_contact">Contact</h3>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Website</label>
          <div className="form_box">
            <input value={website} onChange={(e)=> setWebsite(e.target.value)} type="url" placeholder="www.timigroupschool.com" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Address</label>
          <div className="form_box">
            <input value={address} onChange={(e)=> setAddress(e.target.value)} type="text" placeholder="Calle Sin National Headquater" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>
      <div className="settings_box">
        <div className="inner_settings">
          <label htmlFor="">School Phone</label>
          <div className="form_box">
            <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="tel" placeholder="+124 906 8149 238" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Email</label>
          <div className="form_box">
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="SayhelloTimiSchool@gmail.com" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>

      <div className="save-changes-button">

        <button onClick={editContact}>{isLoading? "Hold on..": "Update Contact" }</button>
        
      </div>

      <div className="school_map">
        <h3>School Map</h3>
        <img src={map} alt="map" />
      </div>
      <div className="fees">
        <h3>Fees</h3>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Tuition Fee(Annual)</label>
            <div className="form_box">
              <input value={parseInt(fee)} onChange={(e)=>setFee(e.target.value)} type="number" placeholder="Timi Group School" />
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
          <div className="inner_settings">
            <label htmlFor="">Payment Option</label>
            <select value={method} onChange={(e)=> setMethod(e.target.value)} name="type">
              <option value="private">Bank Teller</option>
              <option value="public">Public</option>
            </select>
          </div>
        </div>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Schoolarship</label>
            <div className="form_box">
              <input value={scholarship} onChange={(e)=>setScholarship(e.target.value)} type="text" placeholder="None" />
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
        </div>
      </div>

        <div className="save-changes-button">
        <button onClick={editFees}>{ isLoading ? "Hold on.." : "Update Fees"}</button>
        
      </div>

      <div className="admission">
        <h3>Admission</h3>
        <div className="settings_box">
          <div className="inner_settings">
            <label htmlFor="">Starting</label>
            <div className="form_box">
              <input type="date" />
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
          <div className="inner_settings">
            <label htmlFor="">Ending</label>
            <div className="form_box">
              <input type="date"/>
              <img src={RenameIcon} alt="rename" />
            </div>
          </div>
        </div>
      </div>
      <div className="save-changes-button">
      <button>Update Admission</button>
        
      </div>
    </div>
  );
};

export default ProfileNav;
