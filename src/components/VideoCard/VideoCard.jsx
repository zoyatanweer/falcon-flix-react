import React from "react";

import {
  LikedIconFilled,
  LikeIcon,
  PlaylistPlayIcon,
  WatchLaterClickIcon,
} from "../../Assets/Svg/allsvg";
import { videos } from "../../backend/db/videos";
import "./VideoCard.css";
import { useVideo } from "../../context/VideoContext";
import { removeWatchLaterVideos } from "../../api/videos";
import { useAuth } from "../../context/authContext";

const VideoCard = () => {
  const { token } = useAuth();

  const { videoState, removeLikes, getLikes, getWatchLater, removeWatchLater } =
    useVideo();
  const { videos } = videoState;

  // const likeVideoToggleHandler = (video) => {
  //   const index =
  //     likedVideos.findIndex((item) => item._id === video._id) === -1;
  // };

  // }
  // const isInLikedVideos =
  //   likedVideos.findIndex((i) => i._id === videos._id) === -1 ? false : true;

  const likeVideoToggleHandler = (token, video) => {
    videoState.liked.some((item) => item._id === video._id)
      ? removeLikes(token, video._id)
      : getLikes(token, video);
  };

  const watchLaterToggleHandler = (video, token) => {
    videoState.watchLater.some((item) => item._id === video._id)
      ? removeWatchLater(video._id, token)
      : getWatchLater(video, token);
  };

  return videos.map((video) => {
    const { title, img, creator, dateUploaded } = video;
    return (
      <div className="video-card">
        <div className="vid-thumbnail">
          <img className="vid-img" src={img}></img>
        </div>
        <div className="vid-title">
          <h6 className="typography-h6 title">{title}</h6>
          <p className="para-xsmall creator">{creator}</p>
        </div>
        <div className="vid-details">
          <div className="vid-services">
            <LikeIcon
              className="liked-clicked"
              onClick={() => likeVideoToggleHandler(token, video)}
              {...(videoState.liked.some((item) => item._id === video._id) ? (
                <LikeIcon />
              ) : (
                <LikedIconFilled />
              ))}
            />
            <WatchLaterClickIcon
              className="watchLater-clicked"
              onClick={() => watchLaterToggleHandler(video, token)}
            />
            <PlaylistPlayIcon />
          </div>
          <p className="date para-xsmall ">{dateUploaded}</p>
        </div>
      </div>
    );
  });
};

export { VideoCard };
