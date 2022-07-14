import React from "react";
import { NavLink } from "react-router-dom";
import {
  ExploreIcon,
  HistoryIcon,
  HomeIcon,
  LikedIcon,
  PlaylistPlayIcon,
  WatchLaterIcon,
} from "../../Assets/Svg/allsvg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-ul">
        <NavLink to="/">
          <li className="sidebar-item">
            <HomeIcon className="sidebar-icon" />
            <p className="sidebar-name">Home</p>
          </li>
        </NavLink>
        <NavLink to="/explore">
          <li className="sidebar-item">
            <ExploreIcon className="sidebar-icon" />
            <p className="sidebar-name">Explore</p>
          </li>
        </NavLink>

        <NavLink to="/playlist">
          <li className="sidebar-item">
            <PlaylistPlayIcon className="sidebar-icon" />
            <p className="sidebar-name">Playlist</p>
          </li>
        </NavLink>
        <NavLink to="/watchLater">
          <li className="sidebar-item">
            <WatchLaterIcon className="sidebar-icon" />
            <p className="sidebar-name">Watch Later</p>
          </li>
        </NavLink>
        <NavLink to="/likedVideos">
          <li className="sidebar-item">
            <LikedIcon className="sidebar-icon" />
            <p className="sidebar-name">Liked Videos</p>
          </li>
        </NavLink>
        <NavLink to="/history">
          <li className="sidebar-item">
            <HistoryIcon className="sidebar-icon" />
            <p className="sidebar-name">History</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export { Sidebar };
