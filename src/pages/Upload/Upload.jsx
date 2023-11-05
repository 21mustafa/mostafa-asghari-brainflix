import React from "react";
import upload from "../../assets/images/Upload-video-preview.jpg";
import publish from "../../assets/images/Icons/publish.svg";
import { useNavigate } from "react-router-dom";
import "./Upload.scss";
import axios from "axios";

function Upload(props) {
  const navigate = useNavigate();
  return (
    <>
      <form
        className="upload"
        onSubmit={(event) => {
          event.preventDefault();

          const form = event.target;
          const title = form.elements.title.value;
          const description = form.elements.description.value;
          const imgPath = "/images/image8.jpeg";

          axios
            .post("/videos", {
              title,
              image: imgPath,
              description,
            })
            .then((response) => {
              if (response.status === 201) {
                alert("Successfully Published");
                props.onSubmit();
                navigate("/");
              } else {
                alert("Failed to publish!");
              }
            })
            .catch((error) => {
              console.log(error);
              alert("Failed to publish!");
            });
        }}
      >
        <div className="upload__head">
          <h1>Upload Video</h1>
        </div>

        <div className="upload__container">
          <div className="upload__input">
            <label className="upload__input-label">VIDEO THUMBNAIL</label>
            <img className="upload__input-img" src={upload} alt="upload" />
          </div>
          <div className="upload__input-main">
            <div className="upload__input-maintop">
              <label className="upload__input-label" for="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__input-text"
                type="text"
                placeholder="Add a title to your video"
                id="title"
                name="title"
              />
            </div>
            <div className="upload__input-mainbottom">
              <label for="description" className="upload__input-label">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__input-textarea"
                rows="6"
                placeholder="Add a description to your video"
                id="description"
                name="description"
              />
            </div>
          </div>
        </div>

        <div className="button">
          <button className="button__publish" type="submit">
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
      </form>
    </>
  );
}

export default Upload;
