import React from "react";

const Header = () => {
  return (
    <>
      <div className="desktop-query">
        <SearchIcon className="right-nav-img img-search"></SearchIcon>
        <input
          className="desktop-searchbar"
          type="text"
          placeholder="Search for products"
        />
      </div>
    </>
  );
};
