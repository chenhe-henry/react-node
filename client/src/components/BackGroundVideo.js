import React from "react";
import video from "../assets/video.mp4";
import "../assets/BackGroundVideo.scss";

const BackGroundVideo = () => {
  return (
    <div class="bg-video">
      <video class="bg-video__content" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default BackGroundVideo;
