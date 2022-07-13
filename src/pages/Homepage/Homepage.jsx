import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HomepageVideo } from "./HomepageVideo";

import {
  bloopersPhoto,
  interviewsPhoto,
  talkShowsPhoto,
  trailersPhoto,
} from "../../Assets/index";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="container">
      {/* ----page content starts---- */}
      <div className="main-page-content">
        <Sidebar className="item-c" />
        <div className="main-content item-b">
          <HomepageVideo />
          <button className="btn-explore">Explore more videos</button>
          <div className="div-title">
            <h2 className="typography-h2">CATEGORIES</h2>
            <div className="division-title"></div>
          </div>

          <div className="categories">
            <div className="two-items">
              <div className="category-item item-left">
                <img src={trailersPhoto} className="category-img"></img>
                <span className="category-title">TRAILERS</span>
              </div>
              <div className="category-item item-right">
                <img src={bloopersPhoto} className="category-img"></img>
                <span className="category-title">BLOOPERS</span>
              </div>
            </div>
            <div className="two-items">
              <div className="category-item item-left">
                <img src={talkShowsPhoto} className="category-img"></img>
                <span className="category-title">TALK SHOWS</span>
              </div>
              <div className="category-item item-right">
                <img src={interviewsPhoto} className="category-img"></img>
                <span className="category-title">INTERVIEWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----page content ends---- */}
    </div>
  );
};

export { Homepage };
