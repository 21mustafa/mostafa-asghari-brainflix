import React from "react";
import "./VideoList.scss";
import { useNavigate, useParams } from "react-router-dom";

function VideoList(props) {
  const navigate = useNavigate();
  const params = useParams();
  const currentVideoId = params.id ? params.id : props.videos[0].id;
  return (
    <div className="videos">
      <div className="videos__head">NEXT VIDEOS</div>
      <div className="videos__container">
        {props.videos
          .filter((item) => {
            return item.id !== currentVideoId;
          })
          .map((item) => {
            return (
              <div
                onClick={() => {
                  navigate(`/videos/${item.id}`);
                }}
              >
                <div className="videos__content">
                  <div>
                    <img
                      className="videos__photo"
                      src={item.image}
                      alt="image"
                    />
                  </div>
                  <div className="videos__text">
                    <div className="videos__text-top">{item.title}</div>
                    <div className="videos__text-bottom">{item.channel}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
