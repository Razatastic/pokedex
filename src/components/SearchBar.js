import React from "react";
import pokeball from "../assets/pokeball.svg";

const SearchBar = ({ userInput, handleChange, handleSubmit }) => (
  <div className="searchbar-container">
    <input
      className="user-input"
      type="text"
      name="pokemon"
      value={userInput}
      onChange={handleChange}
      placeholder={"Enter your pokémon"}
    />

    <img
      className="pokeball"
      type="image"
      src={pokeball}
      alt="pokeball submit button"
      onClick={handleSubmit}
    />
  </div>
);

export default SearchBar;
