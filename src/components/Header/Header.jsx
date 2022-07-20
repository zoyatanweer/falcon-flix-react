import React from "react";
import { LogOutIcon, SearchIcon, UserIcon } from "../../Assets/Svg/allsvg";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../context/authContext";

const Header = () => {
  const { token, logoutHandler } = useAuth();
  return (
    <>
      <nav className="navigation-container item-a">
        <div className="nav-brand title-theme">
          <NavLink to="/">
            Falcon <span className="title-theme-name">Flix</span>
          </NavLink>
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
          {token ? (
            <NavLink to="/">
              <button
                onClick={logoutHandler}
                className=" btn box-shadow btn-primary btn-logout"
              >
                <LogOutIcon />
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <button class="btn box-shadow btn-primary">Login</button>
            </NavLink>
          )}
        </div>
      </nav>
      <div className="division"></div>
    </>
  );
};

export { Header };
