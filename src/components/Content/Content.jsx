import React, { useState } from "react";
import videoDetails from "../../data/video-details.json";
import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./Content.scss";

function Content() {
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  const onVideoChange = (id) => {
    const newVideo = videoDetails.find((item) => {
      return item.id === id;
    });
    setCurrentVideo(newVideo);
  };

  return (
    <div className="content">
      <div className="content__video">
        <video
          poster={currentVideo.image}
          alt="Now Playing Video"
          className="content__hero-video"
          controls
        />
      </div>

      <div className="content__main">
        <div>
          <Description
            title={currentVideo.title}
            channel={currentVideo.channel}
            timestamp={currentVideo.timestamp}
            views={currentVideo.views}
            likes={currentVideo.likes}
            description={currentVideo.description}
          />

          <Comments comments={currentVideo.comments} />
        </div>

        <VideoList
          onVideoChange={onVideoChange}
          currentVideoId={currentVideo.id}
        />
      </div>
    </div>
  );
}

export default Content;
