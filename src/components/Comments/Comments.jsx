import React from "react";
import profilePhoto from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/images/Icons/add_comment.svg";
import "./Comments.scss";

function Comments(props) {
  const getComments = () => {
    return props.comments.map((comment) => {
      return (
        <div className="comment">
          <div className="comment__photo"></div>

          <div className="comment__container">
            <div className="comment__container-head">
              <div className="comment__container-head-left">{comment.name}</div>
              <div className="comment__container-head-right">
                {new Date(comment.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="comment__text">{comment.comment}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="conversation">
      <div className="conversation__count">
        {props.comments.length} Comments
      </div>
      <div className="conversation__content">
        <div>
          <img
            className="conversation__photo"
            src={profilePhoto}
            alt="profile Photo"
          />
        </div>
        <div className="conversation__container">
          <label className="conversation__container-label">
            JOIN THE CONVERSATION{" "}
          </label>
          <div className="conversation__container-flex">
            <textarea
              className="conversation__container-input"
              placeholder="Add a new comment"
              rows={5}
            />
            <button className="conversation__container-button">
              <img
                className="conversation__container-img"
                src={addComment}
                alt="add comment"
              />{" "}
              <span className="conversation__container-button-text">
                COMMENT
              </span>
            </button>
          </div>
        </div>
      </div>
      {getComments()}
    </div>
  );
}

export default Comments;
