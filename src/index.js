import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { VideoProvider } from "./context/VideoContext";
import { AuthProvider } from "./context/authContext";

makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
// makeServer();

root.render(
  // makeServer();

  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
