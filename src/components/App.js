import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Form from "./Form";
import ResultCard from "./ResultCard";
import pokedexLogo from "../assets/pin-drop.svg";
import PokemonHelper from "./PokemonHelper";

const url = "https://pokeapi.co/api/v2/pokemon/"; // PokeAPI Link

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
    <div className="container-div flex-row">
      {/* User Input */}
      <div className="main-div flex-small vertical-center">
        <img className="pokedex" src={pokedexLogo} alt="pokedex icon" />
        <Form updatePokemon={updatePokemon} />
      </div>
      {/* Result */}
      <div className="main-div flex-large vertical-center">
        <ResultCard pokemonData={pokemonObject} />
      </div>
    </div>
  );
}

export default App;
