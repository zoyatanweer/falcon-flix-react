import React from "react";
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
    <>
      {/* <h2>hello from sidebar</h2> */}
      <div className="sidebar-container">
        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <HomeIcon className="sidebar-icon" />
            <p className="sidebar-name">Home</p>
          </li>
        </ul>
        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <ExploreIcon className="sidebar-icon" />
            <p className="sidebar-name">Explore</p>
          </li>
        </ul>
        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <PlaylistPlayIcon className="sidebar-icon" />
            <p className="sidebar-name">Playlist</p>
          </li>
        </ul>
        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <WatchLaterIcon className="sidebar-icon" />
            <p className="sidebar-name">Watch Later</p>
          </li>
        </ul>
        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <LikedIcon className="sidebar-icon" />
            <p className="sidebar-name">Liked Videos</p>
          </li>
        </ul>

        <ul className="sidebar-ul">
          <li className="sidebar-item">
            <HistoryIcon className="sidebar-icon" />
            <p className="sidebar-name">History</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export { Sidebar };
