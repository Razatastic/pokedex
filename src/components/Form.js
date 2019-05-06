import React, { useState } from "react";
import SearchBar from "./SearchBar";
import pokedexLogo from "../assets/pin-drop.svg";
import styled from "styled-components";

const Container = styled.form`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Greeting = styled.label`
  font-size: 1em;
  @media (min-width: 1200px) {
    font-size: 2em;
  }
`;

function Form({ updatePokemon }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    updatePokemon(userInput);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <img className="pokedex" src={pokedexLogo} alt="pokedex icon" />
      <Greeting>What Pokémon would you like to know about?</Greeting>
      <SearchBar
        userInput={userInput}
        handleChange={e => setUserInput(e.target.value)}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Form;
