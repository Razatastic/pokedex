import React, { useState } from "react";
import SearchBar from "./SearchBar";

function Form({ updatePokemon }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    updatePokemon(userInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="greeting">
        What Pokémon would you like to know about?
      </label>
      <SearchBar
        userInput={userInput}
        handleChange={e => setUserInput(e.target.value)}
        handleSubmit={handleSubmit}
      />
    </form>
  );
}

export default Form;
