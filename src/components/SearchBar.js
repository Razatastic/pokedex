import React from "react";
import pokeball from "../images/pokeball.svg";

const id = 1; // Identifier for Pokemon - Change this later for dynamic updating!

const SearchBar = props => {
  return (
    <div className="">
      <input className="userInput" type="text" />

      <img
        className="pokeball"
        type="image"
        src={pokeball}
        onClick={() => {
          props.handleOnClick(id);
        }}
        alt="pokeball submit button"
      />
    </div>
  );
};

export default SearchBar;
