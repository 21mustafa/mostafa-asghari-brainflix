import React from "react";
import upload from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/Icons/publish.svg";
import { useNavigate } from "react-router-dom";

function Upload(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Upload Video</h1>
      <div>
        <label>VIDEO THUMBNAIL</label>
        <img src={upload} alt="upload" />
      </div>
      <div>
        <label>TITLE YOUR VIDEO</label>
        <input type="text" placeholder="Add a title to your video" />
      </div>
      <div>
        <label>ADD A VIDEO DESCRIPTION</label>
        <input type="text" placeholder="Add a description to your video" />
      </div>

      <button
        onClick={() => {
          alert("Successfully Published");
          navigate("/");
        }}
      >
        <img src={publish} alt="publish" />
        PUBLISH
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        CANCEL
      </button>
    </>
  );
}

export default Upload;
