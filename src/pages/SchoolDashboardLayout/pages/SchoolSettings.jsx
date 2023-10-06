import "./style/SchoolSetting.css";

// images
import RenameIcon from "./images/rename.svg";

const SchoolSettings = () => {
  return (
    <div className="school_settings">
      <div className="profile_dash_header">
        <h1>Settings</h1>
      </div>
      <div className="settings_text">
        <h4>School Basic Information</h4>
        <p>Guide school finders on what to see</p>
      </div>
      <div className="settings_form">
        <div className="inner_settings">
          <label htmlFor="">School Type</label>
          <select name="type">
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Name</label>
          <div className="form_box">
            <input type="text" placeholder="Timi Group School" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
        <div className="inner_settings">
          <label htmlFor="">School Motto</label>
          <div className="form_box">
            <input type="text" placeholder="We rise by lifting others" />
            <img src={RenameIcon} alt="rename" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSettings;
