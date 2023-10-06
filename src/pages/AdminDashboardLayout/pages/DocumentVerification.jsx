import "./style/DocumentVerification.css";

// images
import SearchIcon from "../images/Search.svg";
import SchoolAvatar from "../images/SchoolAvatar.png";
import DM from "../images/DM.png";
import DM2 from "../images/DM2.png";

const DocumentVerification = () => {
  return (
    <div>
      <div className="profile_dash_header">
        <h1>Document Verification</h1>
      </div>
      <div className="document_page">
        <div className="left_document">
          <div className="document_search">
            <img src={SearchIcon} alt="Search" />
            <input type="text" placeholder="search for school" />
          </div>
          <div className="schools_license">
            <div className="inner_school_license">
              <img src={SchoolAvatar} alt="School Avatar" />
              <div className="school_docs_name">
                <h4>Timi Group School</h4>
                <p>School License</p>
              </div>
            </div>
            <span>1h ago</span>
          </div>
        </div>
        <div className="right_document">
          <div className="right_document_header">
            <div className="schools_license">
              <div className="inner_school_license">
                <img src={SchoolAvatar} alt="School Avatar" />
                <div className="school_docs_name">
                  <h4>Timi Group School</h4>
                  <p>Calle Sin National Headquater</p>
                </div>
              </div>
              <button>Approve</button>
            </div>
          </div>
          <div className="inner_message">
            <img src={DM} alt="DM" />
            <p>Government Approve</p>
            <img src={DM2} alt="DM2" />
            <p>School License</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentVerification;
