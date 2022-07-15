import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import {
  getVideos,
  getCategories,
  getLikedVideos,
  postLikedVideos,
  removeLikedVideos,
  removeWatchLaterVideos,
  postWatchLaterVideos,
} from "../api/videos";

const VideoContext = createContext(null);

const initialState = {
  videos: [],
  categories: [],
  liked: [],
  watchLater: [],
};

const VideoProvider = ({ children }) => {
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
  const getLikes = async (video) => {
    try {
      const response = await postLikedVideos(video);
      videoDispatch({ type: "ADD_TO_LIKED", payload: response.likes });
    } catch (error) {
      console.log(error);
    }
  };

  const removeLikes = async (_id) => {
    try {
      const response = await removeLikedVideos(_id);
      videoDispatch({ type: "REMOVE_FROM_LIKED", payload: response.likes });
    } catch (error) {
      console.log(error);
    }
  };

  // watchlater functionality
  const getWatchLater = async (video) => {
    try {
      const response = await postWatchLaterVideos(video);
      videoDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.watchlater,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeWatchLater = async (_id) => {
    try {
      const response = await removeWatchLaterVideos(_id);
      videoDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.watchlater,
      });
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };

// // reducer function
// const videoReducerFunc = (videoState, action) => {
//   switch (action.type) {
//     case "SET_DATA":
//       return {
//         ...videoState,
//         videos: action.payload,
//       };
//     case "SET_CATEGORIES":
//       return {
//         ...videoState,
//         categoriies: action.payload,
//       };
//   }
// };

// useEffect(() => {
//   const allVideos = async () => {
//     try {
//       const response = await getVideos();
//       videoDispatch({
//         type: "SET_VIDEOS",
//         payload: response.videos,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   allVideos();
// }, []);

// useEffect(() => {
//   const allCategories = async () => {
//     try {
//       const response = await getCategories();
//       videoDispatch({
//         type: "SET_CATEGORIES",
//         payload: response.categories,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   allCategories();
// }, []);
