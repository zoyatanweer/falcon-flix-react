import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { useVideo } from "../../context/VideoContext";
import {
  LikeIcon,
  LikedIconFilled,
  WatchLaterIcon,
  WatchLaterClickIcon,
  PlaylistPlayIcon,
} from "../../Assets/Svg/allsvg";
import "./SingleVideo.css";
import { useAuth } from "../../context/authContext";

const SingleVideo = () => {
  const { token } = useAuth();
  const { videoID } = useParams();
  const {
    videoState,
    getLikes,
    removeLikes,
    getWatchLater,
    removeWatchLater,
    getHistory,
  } = useVideo();
  const { videos } = videoState;

  const videoExist = (id) => {
    const currentVideo = videos.find((video) => video._id === id);
    return currentVideo;
  };

  const playingVideo = videoExist(videoID);

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

  return (
    <>
      <div className="single-video-section">
        <div className="single-video-player">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoID}`}
            controls={true}
            playing={true}
            width="80%"
            height="450px"
          />
        </div>
        <div className="single-video-details">
          <h1 className="single-video-title">{playingVideo.title}</h1>
          <h2 className="single-video-desc">{playingVideo.description}</h2>
          <h2 className="single-video-creator">{playingVideo.creator}</h2>
          <div className="single-video-action">
            <div className="single-video-about">
              <h3 className="single-video-views">{playingVideo.views} views</h3>
              <h3 className="single-video-date">{playingVideo.dateUploaded}</h3>
            </div>

            <div className="single-video-action-container">
              <LikeIcon
                className="liked-clicked single-video-icons"
                onClick={() => likeVideoToggleHandler(token, playingVideo)}
                {...(videoState.liked.some(
                  (item) => item._id === playingVideo._id
                ) ? (
                  <LikeIcon />
                ) : (
                  <LikedIconFilled />
                ))}
              />
              <WatchLaterClickIcon
                className="watchLater-clicked single-video-icons"
                onClick={() => watchLaterToggleHandler(token, playingVideo)}
                {...videoState.watchLater.some(
                  (item) => item._id === playingVideo._id
                )}
              />
              <PlaylistPlayIcon className="single-video-icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { SingleVideo };
