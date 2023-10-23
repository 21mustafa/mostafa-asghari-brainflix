import React from "react";
import videos from "../../data/videos.json";
import "./VideoList.scss";

function VideoList(props) {
  return (
    <div className="videos">
      <div className="videos__head">NEXT VIDEOS</div>
      <div className="videos__container">
        {videos
          .filter((item) => {
            return item.id !== props.currentVideoId;
          })
          .map((item) => {
            return (
              <div
                onClick={() => {
                  props.onVideoChange(item.id);
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
