import React from "react";
import searchIcon from "../../assets/images/Icons/search.svg";
import "./SearchInput.scss";

function SearchInput() {
  return (
    <div className="search">
      <img className="search__logo" src={searchIcon} alt="search Icon" />
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
