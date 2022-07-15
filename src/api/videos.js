import axios from "axios";

const token = localStorage.getItem("token");

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

const getLikedVideos = async () => {
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

const postLikedVideos = async (video) => {
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

const removeLikedVideos = async (_id) => {
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

export {
  getVideos,
  getCategories,
  getLikedVideos,
  postLikedVideos,
  removeLikedVideos,
};
