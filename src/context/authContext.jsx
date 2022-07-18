import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { loginAPI, signupAPI } from "../api/auth";
import axios from "axios";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const loginAPI = (user) => {
    return axios.post("/api/auth/login", user);
  };

  const signupAPI = (user) => {
    return axios.post("/api/auth/signup", user);
  };

  const loginHandler = async () => {
    console.log("login aya");
    try {
      const response = await axios.post("/api/auth/login", {
        // email: loginCredentials.email,
        // password: loginCredentials.password,
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.foundUser));
        setToken(response.data.encodedToken);
        setUser(response.data.foundUser);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signupHandler = async (user) => {
    try {
      const response = await signupAPI(user);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.data.createdUser));
        setToken(response.data.encodedToken);
        setUser(response.data.createdUser);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        signupHandler,
        logoutHandler,
        token,
        user,
        loginCredentials,
        setLoginCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
