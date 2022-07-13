import React from "react";
import {
  LikeIcon,
  OptionsIcon,
  PlaylistPlayIcon,
  WatchLaterClickIcon,
} from "../../Assets/Svg/allsvg";
import { videos } from "../../backend/db/videos";
import "./VideoCard.css";

const VideoCard = () => {
  return videos.map((video) => {
    return (
      <div className="video-card">
        <div className="vid-thumbnail">
          <img className="vid-img" src={video.img}></img>
        </div>
        <div className="vid-title">
          <h6 className="typography-h6 title">{video.title}</h6>
          <p className="para-xsmall creator">{video.creator}</p>
        </div>
        <div className="vid-details">
          <div className="vid-services">
            <LikeIcon className="liked-clicked" />
            <WatchLaterClickIcon className="watchLater-clicked" />
            <PlaylistPlayIcon />
          </div>
          <p className="date para-xsmall ">{video.dateUploaded}</p>
        </div>
      </div>
    );
  });
};

export { VideoCard };
