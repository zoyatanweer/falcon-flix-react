import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";

import {
  LikedIconFilled,
  LikeIcon,
  ModalCloseIcon,
  PlaylistPlayIcon,
  WatchLaterClickIcon,
  WatchLaterIcon,
} from "../../Assets/Svg/allsvg";
import { videos } from "../../backend/db/videos";
import { Link, useNavigate } from "react-router-dom";
import "./VideoCard.css";
import { useVideo } from "../../context/VideoContext";
import { useAuth } from "../../context/authContext";

const VideoCard = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const {
    videoState,
    getLikes,
    removeLikes,
    getWatchLater,
    removeWatchLater,
    getHistory,
    addVideoToPlaylist,
    createPlaylist,
    deleteVideoFromPlaylist,
  } = useVideo();
  const { videos } = videoState;
  const [playlistModal, setPlaylistModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState("");
  const [currentVideo, setCurrentVideo] = useState({});

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

  const isUserLoggedIn = (token, video) => {
    if (token) {
      setPlaylistModal(true);
      var curr = videoState.videos.find(
        (singleVideo) => singleVideo._id === video._id
      );
      setCurrentVideo(curr);
    } else {
      toast.error("You're not logged in!");
      navigate("/login");
    }
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "transparent",
    },
    content: {
      backgroundColor: "var(--background-color)",
      color: "var(--text-color)",
      textAlign: "center",
    },
  };

  const videoExistInPlaylist = (playlist) =>
    playlist.videos.some((video) => video._id === currentVideo._id);

  const addNewVideoToPlaylist = (currentVideo, playlist) => {
    videoExistInPlaylist(playlist)
      ? deleteVideoFromPlaylist(currentVideo._id, playlist._id, token)
      : addVideoToPlaylist(currentVideo, playlist._id, token);
  };

  const createNewPlaylist = (playlistName, token) => {
    playlistName && createPlaylist(playlistName, token);
    setNewPlaylist("");
  };

  return videos.map((video) => {
    const { title, img, creator, dateUploaded } = video;
    return (
      <div className="video-card">
        <div className="vid-thumbnail">
          <Link to={`/explore/${video._id}`}>
            <img
              onClick={() => getHistory(token, video)}
              className="vid-img"
              src={img}
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
            <PlaylistPlayIcon
              className="watchLater-clicked"
              onClick={() => isUserLoggedIn(token, video)}
            />
          </div>
          <p className="date para-xsmall ">{dateUploaded}</p>
        </div>
        {playlistModal && (
          <Modal
            isOpen={playlistModal}
            style={modalStyle}
            className="modal-component"
          >
            <h3 className="modal-playlist">
              Add to Playlist
              <ModalCloseIcon
                onClick={() => setPlaylistModal(false)}
                className="modal-close"
              />
            </h3>

            <section>
              {videoState.playlists.length > 0 &&
                videoState.playlists.map((playlist) => {
                  return (
                    <div key={playlist._id}>
                      <input
                        type="checkbox"
                        checked={videoExistInPlaylist(playlist)}
                        onChange={() => {
                          addNewVideoToPlaylist(currentVideo, playlist);
                        }}
                      />
                      <span>{playlist.title}</span>
                    </div>
                  );
                })}
            </section>
            <div className="modal-input">
              <label>Name </label>
              <input
                className="playlist-name-input"
                type="text"
                value={newPlaylist}
                onChange={(e) => setNewPlaylist(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary btn-create-modal"
              onClick={() => createNewPlaylist(newPlaylist, token)}
            >
              Create Playlist
            </button>
          </Modal>
        )}
      </div>
    );
  });
};

export { VideoCard };
