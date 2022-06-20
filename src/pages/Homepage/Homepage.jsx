import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { HomepageVideo } from "./HomepageVideo";
import { Footer } from "../../components/Footer/Footer";

import { SearchIcon, UserIcon } from "../../Assets/Svg/allsvg";
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
      {/* ----navigation starts---- */}
      <nav className="navigation-container item-a">
        <div className="nav-brand title-theme">
          <a to="/">
            Falcon <span className="title-theme-name">Flix</span>
          </a>
        </div>
        <div className="searchbar">
          <SearchIcon className="right-nav-img img-search"></SearchIcon>
          <input
            className="desktop-searchbar"
            type="text"
            placeholder="Search for videos"
          />
        </div>
        <div className="user-profile">
          <UserIcon />
        </div>
      </nav>
      <div className="division"></div>
      {/* ----navigation ends---- */}

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
                <span className="category-hover">TRAILERS</span>
              </div>
              <div className="category-item item-right">
                <img src={bloopersPhoto} className="category-img"></img>
                <span className="category-hover">BLOOPERS</span>
              </div>
            </div>
            <div className="two-items">
              <div className="category-item item-left">
                <img src={talkShowsPhoto} className="category-img"></img>
                <span className="category-hover">TALK SHOWS</span>
              </div>
              <div className="category-item item-right">
                <img src={interviewsPhoto} className="category-img"></img>
                <span className="category-hover">INTERVIEWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----page content ends---- */}

      <Footer />
    </div>
  );
};

export { Homepage };
