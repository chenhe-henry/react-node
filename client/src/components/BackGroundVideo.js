import React from "react";
import video from "../assets/video.mp4";
import videowebm from "../assets/video.webm";
import "../assets/BackGroundVideo.scss";
import List from "./List";

const BackGroundVideo = () => {
  return (
    <div>
      <div class="bg-video">
        <video class="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={videowebm} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
};

export default BackGroundVideo;
