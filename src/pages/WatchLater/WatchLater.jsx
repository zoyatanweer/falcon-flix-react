import React from "react";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import { useLikedVideos } from "../../context/LikedVideosContext";
import {
  LikeIcon,
  LikedIconFilled,
  WatchLaterIcon,
  WatchLaterClickIcon,
  PlaylistPlayIcon,
} from "../../Assets/Svg/allsvg";
import "./WatchLater.css";
import { useVideo } from "../../context/VideoContext";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const WatchLater = () => {
  const { token } = useAuth();
  const { videoState, getLikes, removeLikes, getWatchLater, removeWatchLater } =
    useVideo();
  const { watchLater } = videoState;

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
      <div className="main-page-content">
        <Sidebar className="item-c" />
        <div className="main-content">
          <div className="videos-container">
            <div className="page-section">
              <h2 className="page-title">WATCH LATER</h2>
            </div>
            {watchLater.length === 0 ? (
              <div className="no-content-section">
                <p>No videos in Watch Later.</p>
                <Link to="/explore">
                  <button className="btn no-btn">Explore</button>
                </Link>
              </div>
            ) : (
              watchLater.map((video) => {
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
                        <button
                          onClick={() => likeVideoToggleHandler(token, video)}
                          className="liked-clicked"
                        >
                          {videoState.liked.some(
                            (item) => item._id === video._id
                          ) ? (
                            <LikedIconFilled />
                          ) : (
                            <LikeIcon />
                          )}
                        </button>
                        <button
                          onClick={() => watchLaterToggleHandler(token, video)}
                          className="watchLater-clicked"
                        >
                          {videoState.watchLater.some(
                            (item) => item._id === video._id
                          ) ? (
                            <WatchLaterIcon />
                          ) : (
                            <WatchLaterClickIcon />
                          )}
                        </button>

                        <PlaylistPlayIcon />
                      </div>
                      <p className="date para-xsmall ">{video.dateUploaded}</p>
                    </div>
                  </div>
                );
              })
            )}
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
