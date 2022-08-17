import React from "react";
import { Link } from "react-router-dom";
import { videos } from "../../backend/db/videos";
import { useVideo } from "../../context/VideoContext";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import {
  LikeIcon,
  LikedIconFilled,
  WatchLaterIcon,
  WatchLaterClickIcon,
  PlaylistPlayIcon,
  HistoryIcon,
} from "../../Assets/Svg/allsvg";
import "./History.css";
import { useAuth } from "../../context/authContext";

const History = () => {
  const {
    videoState,
    getLikes,
    removeLikes,
    getWatchLater,
    removeWatchLater,
    getHistory,
    clearHistory,
    removeHistory,
  } = useVideo();
  const { token } = useAuth();
  const { history } = videoState;

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

  const historyToggleHandler = (token, video) => {
    videoState.history.some((item) => item._id === video._id)
      ? removeHistory(token, video._id)
      : getHistory(token, video);
  };
  return (
    <>
      <div className="main-page-content">
        <Sidebar className="item-c" />
        <div className="main-content">
          <div className="videos-container">
            <div className="page-section">
              <h2 className="page-title">HISTORY</h2>
              <button
                className="btn btn-primary btn-history"
                onClick={() => clearHistory(token)}
              >
                CLEAR HISTORY
              </button>
            </div>
            {history.length === 0 ? (
              <div className="no-content-section">
                <p>No videos in History.</p>
                <Link to="/explore">
                  <button className="btn no-btn">Explore</button>
                </Link>
              </div>
            ) : (
              history.map((video) => {
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

                        <button
                          onClick={() => removeHistory(token, video._id)}
                          className="history-clicked"
                        >
                          {videoState.history.some(
                            (item) => item._id === video._id
                          ) ? (
                            <HistoryIcon />
                          ) : (
                            <HistoryIcon />
                          )}
                        </button>
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
};

export { History };
