import React, { Component } from "react";
import "./Primitive.css";
import "./App.css";
import axios from "axios";
import Form from "./Form";
import ResultCard from "./ResultCard";
import pokedexLogo from "./images/pin-drop.svg";

const url = "https://pokeapi.co/api/v2/pokemon/"; // PokeAPI Link

class App extends Component {
  state = {
    pokemonName: "ditto",
    pokemons: [1, 2, 3]
  };

  componentDidMount() {
    axios.get(url + this.state.pokemonName).then(res => {
      const pokemons = res.data;
      this.setState({ pokemons });
    });
  }

  render() {
    return (
      <div className="vertical-center">
        <div className="flex-row">
          <div className="flex-small vertical-center">
            <img className="pokedex" src={pokedexLogo} alt="pokedex icon" />
            <Form inputData={this.state.pokemonName} />
          </div>
          <div className="flex-small vertical-center">
            <ResultCard
              pokemonName={this.state.pokemonName}
              pokemonData={this.state.pokemons}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
