import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Form from "./Form";
import ResultCard from "./ResultCard";
import PokemonHelper from "./PokemonHelper";
import styled from "styled-components";

const url = "https://pokeapi.co/api/v2/pokemon/"; // PokeAPI Link

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  const [pokemonName, setPokemonName] = useState("mew");
  const [pokemonObject, setPokemonObject] = useState({});

  const getPokemon = useCallback(() => {
    axios
      .get(url + pokemonName)
      .then(res => {
        const pokemonObject = new PokemonHelper(res.data);
        setPokemonObject(pokemonObject);
      })
      .catch(function(error) {
        alert("Please enter a valid Pokemon and try again");
      });
  }, [pokemonName]);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  const updatePokemon = userInput => {
    setPokemonName(userInput);
  };

  return (
    <Container>
      <Form updatePokemon={updatePokemon} />
      <ResultCard pokemonData={pokemonObject} />
    </Container>
  );
}

export default App;
