import React from "react";
import logo from "../../assets/images/BrainFlix-logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";
import uploadPhoto from "../../assets/images/Icons/upload.svg";
import "./Header.scss";

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="brainFlix Logo"></img>
      </div>

      <div>
        <div className="header__search-section">
          <SearchInput />
          <img
            className="header__photo-mobile"
            src={profilePhoto}
            alt="profile Photo"
          />
        </div>
        <button>
          <img src={uploadPhoto} alt="upload Photo" />
          <span>UPLOAD</span>
        </button>
        <div>
          <img
            className="header__photo-desktop"
            src={profilePhoto}
            alt="profile Photo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
