import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
// import toast from "react-toastify/dist/components";
import toast from "react-hot-toast";

import {
  getVideos,
  getCategories,
  getLikedVideos,
  getHistoryVideos,
  postLikedVideos,
  removeLikedVideos,
  removeWatchLaterVideos,
  removeHistoryVideos,
  clearHistoryVideos,
  postWatchLaterVideos,
  postHistoryVideos,
  getAllPlaylists,
  makeNewPlaylist,
  getVideosFromPlaylist,
  deleteFullPlaylist,
  removeFromPlaylist,
} from "../api/videos";

const VideoContext = createContext(null);

const initialState = {
  videos: [],
  categories: [],
  liked: [],
  watchLater: [],
  history: [],
  playlists: [],
};

const VideoProvider = ({ children }) => {
  const navigate = useNavigate();

  const videoReducerFunc = (videoState, action) => {
    switch (action.type) {
      case "SET_VIDEOS":
        return {
          ...videoState,
          videos: action.payload,
        };
      case "SET_CATEGORIES":
        return {
          ...videoState,
          categories: action.payload,
        };
      case "ADD_TO_LIKED":
        return {
          ...videoState,
          liked: action.payload,
        };
      case "REMOVE_FROM_LIKED":
        return {
          ...videoState,
          liked: action.payload,
        };
      case "ADD_TO_WATCHLATER":
        return {
          ...videoState,
          watchLater: action.payload,
        };
      case "REMOVE_FROM_WATCHLATER":
        return {
          ...videoState,
          watchLater: action.payload,
        };
      case "ADD_TO_HISTORY":
        return {
          ...videoState,
          liked: action.payload,
        };
      case "REMOVE_FROM_HISTORY":
        return {
          ...videoState,
          liked: action.payload,
        };
      case "CLEAR_HISTORY":
        return {
          ...videoState,
          liked: action.payload,
        };
      case "NEW_PLAYLIST":
        return {
          ...videoState,
          playlists: action.payload,
        };
      case "ADD_TO_PLAYLIST":
        const newPlaylist = videoState.playlists.reduce((prev, curr) => {
          return action.payload._id === curr._id
            ? [...prev, action.payload]
            : [...prev, curr];
        }, []);
        return {
          ...videoState,
          playlists: newPlaylist,
        };
      case "DELETE_FROM_PLAYLIST":
        const remainingPlaylist = videoState.playlists.reduce((prev, curr) => {
          return action.payload._id === curr._id
            ? [...prev, action.payload]
            : [...prev, curr];
        }, []);
        return {
          ...videoState,
          playlists: remainingPlaylist,
        };
      case "DELETE_PLAYLIST":
        return {
          ...videoState,
          playlists: action.payload,
        };
    }
  };

  const [videoState, videoDispatch] = useReducer(
    videoReducerFunc,
    initialState
  );

  useEffect(() => {
    const allVideos = async () => {
      try {
        const response = await getVideos();
        videoDispatch({
          type: "SET_VIDEOS",
          payload: response.videos,
        });
      } catch (error) {
        console.log(error);
      }
    };
    allVideos();
  }, []);

  useEffect(() => {
    const allCategories = async () => {
      try {
        const response = await getCategories();
        videoDispatch({
          type: "SET_CATEGORIES",
          payload: response.categories,
        });
      } catch (error) {
        console.log(error);
      }
    };
    allCategories();
  }, []);

  // liked functionality
  const getLikes = async (token, video) => {
    if (token) {
      try {
        const response = await postLikedVideos(token, video);
        videoDispatch({ type: "ADD_TO_LIKED", payload: response.likes });
        toast.success("Video added to likes!");
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
      toast.error("You're not logged in!");
    }
  };

  const removeLikes = async (token, _id) => {
    try {
      const response = await removeLikedVideos(token, _id);
      videoDispatch({ type: "REMOVE_FROM_LIKED", payload: response.likes });
      toast.error("Video removed from likes!");
    } catch (error) {
      console.log(error);
      toast.error("You're not logged in!");
    }
  };

  // watchlater functionality
  const getWatchLater = async (token, video) => {
    if (token) {
      try {
        const response = await postWatchLaterVideos(token, video);
        videoDispatch({
          type: "ADD_TO_WATCHLATER",
          payload: response.watchlater,
        });
        toast.success("Video added to watch later!");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("You're not logged in!");
      navigate("/login");
    }
  };

  const removeWatchLater = async (token, _id) => {
    try {
      const response = await removeWatchLaterVideos(token, _id);
      videoDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.watchlater,
      });
      toast.error("Video removed from watch later!");
    } catch (error) {
      console.log(error);
      toast.error("You're not logged in!");
    }
  };

  // history functionality
  const getHistory = async (token, video) => {
    if (token) {
      try {
        const response = await postHistoryVideos(token, video);
        videoDispatch({
          type: "ADD_TO_HISTORY",
          payload: response.history,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("You're not logged in!");
      navigate("/login");
    }
  };

  const removeHistory = async (token, _id) => {
    try {
      const response = await removeHistoryVideos(token, _id);
      videoDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.history,
      });
      toast.error("Video removed from history!");
    } catch (error) {
      console.log(error);
      toast.error("You're not logged in!");
    }
  };

  const clearHistory = async (token) => {
    try {
      const response = await clearHistoryVideos(token);
      videoDispatch({
        type: "CLEAR_HISTORY",
        payload: response.history,
      });
      toast.success("History cleared!");
    } catch (error) {
      console.log(error);
      toast.error("Cannot clear history!");
    }
  };

  //playlist functionality
  const createNewPLaylist = async (playListName, token) => {
    if (token) {
      try {
        const response = await makeNewPlaylist(playListName, token);
        videoDispatch({
          type: "NEW_PLAYLIST",
          payload: response.playlists,
        });
        toast.success("New playlist created!");
      } catch (error) {
        console.log(error);
        toast.error("Unable to create new playlist!");
      }
    } else {
      navigate("/login");
      toast.error("You're not logged in!");
    }
  };

  const addVideoToPlaylist = async (video, playlistID, token) => {
    if (token) {
      try {
        const response = await addVideoToPlaylist(video, playlistID, token);
        videoDispatch({
          type: "ADD_TO_PLAYLIST",
          payload: response.playlist,
        });
        toast.success("Video added to playlist!");
      } catch (error) {
        console.log(error);
        toast.error("Unable to add video to playlist!");
      }
    } else {
      navigate("/login");
      toast.error("You're not logged in!");
    }
  };

  const deleteVideoFromPlaylist = async (videoID, playlistID, token) => {
    try {
      const response = await removeFromPlaylist(videoID, playlistID, token);
      videoDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: response.playlist,
      });
      toast.success("Video deleted from playlist!");
    } catch (error) {
      console.log(error);
      toast.error("Cannot remove video from playlist!");
    }
  };

  const deletePlaylist = async (playlistID, token) => {
    try {
      const response = await deleteFullPlaylist(playlistID, token);
      videoDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.playlists,
      });
      toast.success("Playlist deleted!");
    } catch (error) {
      console.log(error);
      toast.error("Unable to delete playlist!");
    }
  };
  return (
    <VideoContext.Provider
      value={{
        videoState,
        videoDispatch,
        getLikes,
        removeLikes,
        getWatchLater,
        removeWatchLater,
        getHistory,
        removeHistory,
        clearHistory,
        createNewPLaylist,
        deleteVideoFromPlaylist,
        deletePlaylist,
        makeNewPlaylist,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };
