import React from "react";
import views from "../../assets/images/Icons/views.svg";
import likes from "../../assets/images/Icons/likes.svg";
import "./Description.scss";

function Description(props) {
  return (
    <div className="description">
      <h1>{props.title}</h1>
      <div className="description__head">
        <div className="description__head-left">
          <span>By {props.channel}</span>
          <span className="description__head-silver">
            {new Date(props.timestamp).toLocaleDateString()}
          </span>
        </div>
        <div className="description__head-right">
          <span className="description__head-silver">
            <img src={views} alt="views" />
            {props.views}
          </span>
          <span className="description__head-silver">
            <img src={likes} alt="likes" />
            {props.likes}
          </span>
        </div>
      </div>
      <div className="description__text">{props.description}</div>
    </div>
  );
}

export default Description;
