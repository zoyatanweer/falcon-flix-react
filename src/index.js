import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { makeServer } from "./server";

import reportWebVitals from "./reportWebVitals";
// makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
// makeServer();

root.render(
  // makeServer();

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
