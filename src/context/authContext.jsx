// import { createContext, useContext, useState } from "react";

// import { navigate, useNavigate } from "react-router-dom";
// import { loginAPI, signupAPI } from "../api/auth";

// const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

//   const loginHandler = async (user) => {
//     try {
//       const response = await loginAPI(user);
//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.encodedToken);
//         localStorage.setItem("user", JSON.stringify(response.data.foundUser));
//         setToken(response.data.encodedToken);
//         setUser(response.data.foundUser);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const signupHandler = async (user) => {
//     try {
//       const response = await signupAPI(user);
//       if (response.status === 200) {
//         localStorage.setItem("token", response.data.encodedToken);
//         localStorage.setItem("user", JSON.stringify(response.data.createdUser));
//         setToken(response.data.encodedToken);
//         setUser(response.data.createdUser);
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const logoutHandler = () => {
//     navigate("/");
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{ loginHandler, signupHandler, logoutHandler, token, user }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => useContext(AuthContext);

// export { useAuth, AuthProvider };
