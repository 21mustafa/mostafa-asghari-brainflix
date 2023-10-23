import React from "react";
import videos from "../../data/videos.json";

function VideoList(props) {
  return (
    <div className="videos">
      <div className="videos__head">NEXT VIDEOS</div>
      <div>
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
                <div>
                  <img className="videos__photo" src={item.image} alt="image" />
                </div>
                <div className="videos__text">
                  <div className="videos__text-top">{item.title}</div>
                  <div className="videos__text-bottom">{item.channel}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default VideoList;
