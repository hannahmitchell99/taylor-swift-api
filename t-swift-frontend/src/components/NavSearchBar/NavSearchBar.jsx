import React from "react";
import "../NavSearchBar/NavSearchBar.scss";

const NavSearch = ({ handleInput }) => {
  return (
    <>
      <label for="nav__searchbar">Search:</label>
      <input
        onChange={handleInput}
        type="text"
        className="nav__searchbar"
      ></input>
    </>
  );
};

export default NavSearch;
