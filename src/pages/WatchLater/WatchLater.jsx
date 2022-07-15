import React from "react";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import { useLikedVideos } from "../../context/LikedVideosContext";
import {
  LikeIcon,
  WatchLaterClickIcon,
  PlaylistPlayIcon,
} from "../../Assets/Svg/allsvg";
import "./WatchLater.css";
import { useVideo } from "../../context/VideoContext";

const WatchLater = () => {
  const { videoState, getLikes, removeLikes, getWatchLater, removeWatchLater } =
    useVideo();
  const { liked, watchLater } = videoState;

  const likeVideoToggleHandler = (video) => {
    videoState.liked.some((item) => item._id === video._id)
      ? removeLikes(video._id)
      : getLikes(video);
  };
  const watchLaterToggleHandler = (video) => {
    videoState.watchLater.some((item) => item._id === video._id)
      ? removeWatchLater(video._id)
      : getWatchLater(video);
  };

  return (
    <>
      <div className="main-page-content">
        <Sidebar className="item-c" />
        <div className="main-content">
          <div className="videos-container">
            {watchLater.map((video) => {
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
                      <LikeIcon
                        className="liked-clicked"
                        onClick={() => likeVideoToggleHandler(video)}
                      />
                      <WatchLaterClickIcon
                        className="watchLater-clicked"
                        onClick={() => watchLaterToggleHandler(video)}
                      />
                      <PlaylistPlayIcon />
                    </div>
                    <p className="date para-xsmall ">{video.dateUploaded}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );

  //   const isInLikedVideos =
  //     likedVideos.findIndex((i) => i._id === videos._id) === -1 ? false : true;
  //   return videos.map((videos) => {
  //     return
  //   });
};

export { WatchLater };