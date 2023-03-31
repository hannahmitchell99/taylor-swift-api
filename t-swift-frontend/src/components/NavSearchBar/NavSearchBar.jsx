import React from "react";
import "../NavSearchBar/NavSearchBar.scss";

const NavSearch = ({ handleInput }) => {
  return (
    <div className="nav-search">
      <label htmlFor="nav-seach__searchbar">Search:</label>
      <input
        onChange={handleInput}
        type="text"
        className="nav__searchbar"
      ></input>
    </div>
  );
};

export default NavSearch;
