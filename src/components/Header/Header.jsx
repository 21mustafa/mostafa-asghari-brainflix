import React from "react";
import logo from "../../assets/images/BrainFlix-logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";
import uploadPhoto from "../../assets/images/Icons/upload.svg";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header__logo"
      >
        <img src={logo} alt="brainFlix Logo"></img>
      </div>

      <div className="header__container">
        <div className="header__search-section">
          <SearchInput />
          <img
            className="header__photo-mobile"
            src={profilePhoto}
            alt="profile Photo"
          />
        </div>
        <button
          onClick={() => {
            navigate("/upload-video");
          }}
        >
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
