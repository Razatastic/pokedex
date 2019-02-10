import React, { Component } from "react";
import "./styles/Primitive.css";
import "./styles/main.css";
import axios from "axios";
import Form from "./Form";
import ResultCard from "./ResultCard";
import pokedexLogo from "../images/pin-drop.svg";
import PokemonHelper from "./PokemonHelper";

const url = "https://pokeapi.co/api/v2/pokemon/"; // PokeAPI Link

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: "charizard",
      pokemonObject: {}
    };
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(userInput) {
    this.setState(
      {
        pokemonName: userInput
      },
      this.componentDidMount
    );
  }

  componentDidMount() {
    axios
      .get(url + this.state.pokemonName)
      .then(res => {
        const pokemonObject = new PokemonHelper(res.data);
        this.setState({ pokemonObject });
      })
      .catch(function(error) {
        alert("Please enter a valid Pokemon and try again");
      });
  }

  render() {
    const { pokemonObject } = this.state;

    return (
      <div className="container-div flex-row">
        <div className="main-div flex-small vertical-center">
          <img className="pokedex" src={pokedexLogo} alt="pokedex icon" />
          <Form updatePokemon={this.updatePokemon} />
        </div>
        <div className="main-div flex-large vertical-center">
          <ResultCard pokemonData={pokemonObject} />
        </div>
      </div>
    );
  }
}

export default App;
