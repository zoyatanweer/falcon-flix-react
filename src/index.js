import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import reportWebVitals from "./reportWebVitals";
import { LikedVideosProvider } from "./context/LikedVideosContext";
import { VideoProvider } from "./context/VideoContext";
// import { AuthProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
makeServer();

root.render(
  // makeServer();

  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthProvider> */}
      {/* <LikedVideosProvider> */}
      <VideoProvider>
        <App />
      </VideoProvider>
      {/* </LikedVideosProvider> */}
      {/* </AuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
