import React from "react";
import { videos } from "../../backend/db/videos";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";

import {
  LikeIcon,
  WatchLaterClickIcon,
  PlaylistPlayIcon,
} from "../../Assets/Svg/allsvg";
import { useVideo } from "../../context/VideoContext";
import { useAuth } from "../../context/authContext";
import "./Playlist.css";

const Playlist = () => {
  const { token } = useAuth();
  const {
    videoState,
    getLikes,
    removeLikes,
    getWatchLater,
    removeWatchLater,
    getHistory,
  } = useVideo();
  const { liked } = videoState;

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
    <div className="main-page-content">
      <Sidebar className="item-c" />
      <div className="main-content">
        <div className="videos-container">
          <div className="page-section">
            <h2 className="page-title">PLAYLIST</h2>
          </div>
          {liked.map((video) => {
            return (
              <div className="video-card">
                <div className="vid-thumbnail">
                  <img
                    className="vid-img"
                    src={video.img}
                    onClick={() => getHistory(token, video)}
                  ></img>
                </div>
                <div className="vid-title">
                  <h6 className="typography-h6 title">{video.title}</h6>
                  <p className="para-xsmall creator">{video.creator}</p>
                </div>
                <div className="vid-details">
                  <div className="vid-services">
                    <LikeIcon
                      className="liked-clicked"
                      onClick={() => likeVideoToggleHandler(token, video)}
                      {...videoState.liked.some(
                        (item) => item._id === video._id
                      )}
                    />
                    <WatchLaterClickIcon
                      className="watchLater-clicked"
                      onClick={() => watchLaterToggleHandler(token, video)}
                      {...videoState.watchLater.some(
                        (item) => item._id === video._id
                      )}
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
  );
};

export { Playlist };
