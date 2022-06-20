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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
