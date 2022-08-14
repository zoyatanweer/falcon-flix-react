import axios from "axios";
import { useAuth } from "../context/authContext";

const getVideos = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "/api/videos",
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.error(error.response);
  }
};

const getCategories = async () => {
  try {
    const response = await axios({
      method: "get",
      url: ":/api/categories",
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.error(error.response);
  }
};

// liked
const getLikedVideos = async (token) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const postLikedVideos = async (token, video) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      { headers: { authorization: token } }
    );
    if (response.status === 200 || response.status === 201)
      return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const removeLikedVideos = async (token, _id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/likes/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// watch later
const getWatchLaterVideos = async (token) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/watchlater",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const postWatchLaterVideos = async (token, video) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/watchlater",
      data: { video },
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response);
  }
};

const removeWatchLaterVideos = async (token, _id) => {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/watchlater/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//history
const getHistoryVideos = async (token) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/history",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postHistoryVideos = async (token, video) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/history",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const removeHistoryVideos = async (token, _id) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/history/${_id}`,
      headers: { authorization: token },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const clearHistoryVideos = async (token) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: "/api/user/history/all",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

//playlist
const getAllPlaylists = async (token) => {
  // const { token } = useAuth();
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/playlists",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const makeNewPlaylist = async (token, playlistName) => {
  try {
    const response = await axios({
      method: "POST",
      url: "/api/user/playlists",
      playlist: {
        title: playlistName,
        desciption: "",
      },
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.log(error.response);
  }
};

const getVideosFromPlaylist = async (token) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/user/playlists",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const deleteFullPlaylist = async (token, playlistID) => {
  try {
    const response = await axios({
      method: "delete",
      url: `/api/user/playlists/${playlistID}`,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201)
      return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const addToPlaylist = async (video, playlistID, token) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/playlists/${playlistID}`,
      headers: {
        authorization: token,
      },
      data: {
        video,
      },
    });
    if (response.status === 200 || response.status === 201)
      return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

const removeFromPlaylist = async (videoID, playlistID, token) => {
  try {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/playlists/${playlistID}/${videoID}`,
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200 || response.status === 201)
      return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

export {
  getVideos,
  getCategories,
  getLikedVideos,
  postLikedVideos,
  removeLikedVideos,
  getWatchLaterVideos,
  postWatchLaterVideos,
  removeWatchLaterVideos,
  getHistoryVideos,
  postHistoryVideos,
  removeHistoryVideos,
  clearHistoryVideos,
  getAllPlaylists,
  getVideosFromPlaylist,
  makeNewPlaylist,
  addToPlaylist,
  deleteFullPlaylist,
  removeFromPlaylist,
};
