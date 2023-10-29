import React, { useEffect, useState } from "react";

import Description from "../Description/Description";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./Content.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function Content(props) {
  const params = useParams();

  const [video, setVideo] = useState();
  useEffect(() => {
    const id = props.currentVideo ? props.currentVideo.id : params.id;
    window.scrollTo(0, 0);
    axios
      .get(`/videos/${id}?api_key=470d576e-c1d5-4cbb-812a-64aec538f10a`)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.currentVideo, params.id]);

  return video ? (
    <div className="content">
      <div className="content__video">
        <video
          poster={video.image}
          alt="Now Playing Video"
          className="content__hero-video"
          controls
        />
      </div>

      <div className="content__main">
        <div className="content__main-description">
          <Description
            title={video.title}
            channel={video.channel}
            timestamp={video.timestamp}
            views={video.views}
            likes={video.likes}
            description={video.description}
          />

          <Comments comments={video.comments} />
        </div>
        <VideoList videos={props.videos} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Content;
