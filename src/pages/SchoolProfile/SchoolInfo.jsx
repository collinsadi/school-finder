import "./style/SchoolInfo.css";
import { NavLink,useParams } from "react-router-dom";

// components
import SchoolLogo from "./images/SchoolLogo.svg";
import SchoolHero from "./images/SchoolHero.png";
import PriceTag from "./images/price.svg";
import Like from "./images/like.svg";
import Reviewer from "./images/reviewer.svg";
import Rate from "./images/rate.svg";
import map from "./images/map.png";
import { useEffect, useState } from "react";
import { apiUrl } from "../../config";

const SchoolInfo = () => {
  const { schoolId } = useParams();
  console.log(schoolId)

    const [school, setSchool] = useState(null)

  
  

  useEffect(() => {
    
    const getSchool = async () => {
     
      const response = await fetch(apiUrl + "/schools/one?id="+schoolId, {
        method:"GET"
      })

      const data = await response.json()

      console.log(data)

      if(data.status){

        setSchool([data.school])

        console.log(school)
      }


   }

  getSchool()
   
  }, [])
  
  // "/schools/one"
  return (

  <>

    { school && (
      
      <div className="school_info">
      <div className="left_school_info">
        <div className="school_name_header">
          <img src={school[0].registrationDocs.url} alt="Logo" />
          <div className="school_name">
                <h1>{ school[0].name} </h1>
            <p>{ school[0].type ? school[0].type : "" }</p>
          </div>
        </div>
        <div className="school_hero">
          <img src={school[0].registrationDocs.url} alt="hero image" />
        </div>
        <div className="school_price">
          <div className="left_school_price">
            <div className="inner_price_tag">
              <img src={PriceTag} alt="price tag" />
                  <h1>{ school[0].fees ? school[0].fees : "0.00"}K</h1>
            </div>
            <div className="inner_location">
                  <p> { school[0].location ? school[0].location : ""}</p>
            </div>
          </div>
          <div className="right_school_price">
            <div className="inner_save">
              <img src={Like} alt="like" />
              <p>save</p>
            </div>
            <div className="rate_fig">4.2</div>
          </div>
        </div>
        <div className="school-inside_details">
          <div className="left_inside_details">
            <div className="inside_details">
                  <NavLink to="">{ school[0].website}</NavLink>
              <div className="detail_name">
                <p>SCHOOL WEBSITE</p>
              </div>
            </div>
            <div className="inside_details">
                  <NavLink to="">{ school[0].email}</NavLink>
              <div className="detail_name">
                <p>EMAIL</p>
              </div>
            </div>
          </div>
          <div className="right_inside_details">
            <div className="inside_r">
              <p>{school[0].phone}</p>
              <div className="detail_name">
                <p>TELEPHONE</p>
              </div>
            </div>
            <div className="inside_r">
              <p>{school[0].entranceDate ? school[0].entranceDate : "N/A" }</p>
              <div className="detail_name">
                <p>ENTRANCE DATE</p>
              </div>
            </div>
          </div>
        </div>

            
        {/* <div className="review">
          <h3>25 Verified Reviews</h3>
          <div className="reviewer_detail">
            <img src={Reviewer} alt="Reviewer" />
            <div className="reviewer_name">
              <p>Sir Promise</p>
              <img src={Rate} alt="Rate" />
            </div>
          </div>
          <p>
            This school is undeniably impressive, although it comes with a hefty
            price tag. I successfully passed their entrance exam last year and
            received admission just a month later. Since then, their academic
            curriculum has consistently exceeded my expectations. I
            wholeheartedly rate them 5 stars, and that's only because there
            isn't a higher rating available! 😂🌟
          </p>
          <div className="message_box">
            <textarea placeholder="Write a review"></textarea>
            <button>Post</button>
          </div>
        </div> */}
            
      </div>
      <div className="right_school_info">
        <img src={map} alt="map" />
      </div>
    </div>

      )}
    
    </>
    
  );
};

export default SchoolInfo;
