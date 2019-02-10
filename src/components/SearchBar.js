import React from "react";
import pokeball from "../images/pokeball.svg";

const SearchBar = props => {
  return (
    <div className="vertical-center">
      <input
        className="userInput"
        type="text"
        name="pokemon"
        value={props.userInput}
        onChange={props.handleChange}
        placeholder={"Enter your pokémon"}
      />

      <img
        className="pokeball"
        type="image"
        src={pokeball}
        alt="pokeball submit button"
        onClick={props.handleSubmit}
      />
    </div>
  );
};

export default SearchBar;
