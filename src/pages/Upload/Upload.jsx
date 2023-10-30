import React from "react";
import upload from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import "./Upload.scss";

function Upload(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="upload">
        <div className="upload__head">
          <h1>Upload Video</h1>
        </div>

        <div className="upload__container">
          <div className="upload__input">
            <label className="upload__input-label">VIDEO THUMBNAIL</label>
            <img className="upload__input-img" src={upload} alt="upload" />
          </div>
          <div className="upload__input-maintop">
            <label className="upload__input-label">TITLE YOUR VIDEO</label>
            <input
              className="upload__input-text"
              type="text"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload__input-mainbottom">
            <label className="upload__input-label">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload__input-textarea"
              rows="5"
              placeholder="Add a description to your video"
            />
          </div>
        </div>

        <div className="button">
          <button
            className="button__publish"
            onClick={() => {
              alert("Successfully Published");
              navigate("/");
            }}
          >
            <img src={publish} alt="publish" />
            <span>PUBLISH</span>
          </button>
          <button
            className="button__cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            <span>CANCEL</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Upload;
