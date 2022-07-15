import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "./useAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const {
    response: authResponse,
    error: authError,
    operation: authFetch,
  } = useAxios();
  useEffect(() => {
    if (user === null) {
      authFetch({
        method: "post",
        url: "/api/auth/login",
        data: {
          email: "adarshbalika@gmail.com",
          password: "adarshbalika",
        },
      });
    }

    if (authResponse !== undefined) {
      setUser(authResponse);
      localStorage.setItem("token", authResponse.encodedToken);
    }
  }, [authResponse]);
  console.log(authError.response);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
