// import { Action } from "history";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { getVideos, getCategories } from "../api/videos";

const VideoContext = createContext(null);

const initialState = {
  videos: [],
  categories: [],
};

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducerFunc,
    initialState
  );

  const videoReducerFunc = (videoState, action) => {
    switch (action.type) {
      case "SET_DATA":
        return {
          ...videoState,
          videos: action.payload,
        };
      case "SET_CATEGORIES":
        return {
          ...videoState,
          categoriies: action.payload,
        };
    }
  };

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

  return (
    <VideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);

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

export { useVideo, VideoProvider };
