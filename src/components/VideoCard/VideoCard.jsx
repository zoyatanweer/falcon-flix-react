import React from "react";

import {
  LikedIconFilled,
  LikeIcon,
  PlaylistPlayIcon,
  WatchLaterClickIcon,
  WatchLaterIcon,
} from "../../Assets/Svg/allsvg";
import { videos } from "../../backend/db/videos";
import { Link } from "react-router-dom";
import "./VideoCard.css";
import { useVideo } from "../../context/VideoContext";
import { useAuth } from "../../context/authContext";

const VideoCard = () => {
  const { token } = useAuth();

  const {
    videoState,
    getLikes,
    removeLikes,
    getWatchLater,
    removeWatchLater,
    getHistory,
  } = useVideo();
  const { videos, history } = videoState;

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

  const watchLaterToggleHandler = (token, video) => {
    videoState.watchLater.some((item) => item._id === video._id)
      ? removeWatchLater(token, video._id)
      : getWatchLater(token, video);
  };

  console.log("history lo", history);

  return videos.map((video) => {
    const { title, img, creator, dateUploaded } = video;
    return (
      <div className="video-card">
        <div className="vid-thumbnail">
          <Link to={`/explore/${video._id}`}>
            <img
              className="vid-img"
              src={img}
              onClick={() => getHistory(token, video)}
            ></img>
          </Link>
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
                <LikedIconFilled />
              ) : (
                <LikeIcon />
              ))}
            />
            <WatchLaterClickIcon
              className="watchLater-clicked"
              onClick={() => watchLaterToggleHandler(token, video)}
              {...(videoState.watchLater.some(
                (item) => item._id === video._id
              ) ? (
                <WatchLaterIcon />
              ) : (
                <WatchLaterClickIcon />
              ))}
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
