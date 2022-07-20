import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { videos } from "../backend/db/videos";
import { useAxios } from "./Auth/useAxios";

const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const {
    response: likedVideosResponse,
    operation: fetchLikedVideos,
    loading: loadingLikedVideos,
  } = useAxios();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (likedVideosResponse != undefined) {
      setLikedVideos(likedVideosResponse.likedVideos);
    }
  }, [likedVideosResponse]);

  const likeVideoToggleHandler = (video) => {
    const index =
      likedVideos.findIndex((item) => item._id === video._id) === -1;
    index
      ? fetchLikedVideos({
          method: "POST",
          url: "/api/user/likes",
          headers: {
            authorization: { token },
          },
          data: { video },
        })
      : fetchLikedVideos({
          method: "DELETE",
          url: `/api/user/likes/${video._id}`,
          headers: {
            authorization: { token },
          },
        });
  };
  const getLikedVideo = () => {
    fetchLikedVideos({
      method: "GET",
      url: "/api/user/likes",
      headers: {
        authorization: { token },
      },
    });
  };

  return (
    <LikedVideosContext.Provider
      value={{
        likedVideos,
        setLikedVideos,
        getLikedVideo,
        likeVideoToggleHandler,
      }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

const useLikedVideos = () => useContext(LikedVideosContext);

export { LikedVideosProvider, useLikedVideos };
