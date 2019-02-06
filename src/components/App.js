import React, { Component } from "react";
import "./styles/Primitive.css";
import "./styles/App.css";
import axios from "axios";
import Form from "./Form";
import ResultCard from "./ResultCard";
import pokedexLogo from "../images/pin-drop.svg";
import PokemonHelper from "./PokemonHelper";

const url = "https://pokeapi.co/api/v2/pokemon/"; // PokeAPI Link

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonName: "mewtwo",
      pokemon: {}
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    console.log(id);
  }

  componentDidMount() {
    axios.get(url + this.state.pokemonName).then(res => {
      const pokemon = new PokemonHelper(res.data);
      this.setState({ pokemon });
    });
  }

  render() {
    const { pokemonName, pokemon } = this.state;
    return (
      <div className="vertical-center">
        <div className="flex-row">
          <div className="flex-large vertical-center">
            <img className="pokedex" src={pokedexLogo} alt="pokedex icon" />
            <Form inputData={pokemonName} handleOnClick={this.handleOnClick} />
          </div>
          <div className="flex-large vertical-center">
            <ResultCard pokemonName={pokemonName} pokemonData={pokemon} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
