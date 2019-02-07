import React, { Component } from "react";
import "./styles/Card.css";

class ResultCard extends Component {
  render() {
    const { pokemonData } = this.props;
    const { name, id, height, type, sprite } = pokemonData;

    return (
      <div className="card">
        <h1>{name}</h1>
        <img className="poke-img" src={sprite} alt="pokemon-pic" />
        <ul>
          <li>
            <h5>ID: {id}</h5>
          </li>
          <li>
            <h5>Height: {height}</h5>
          </li>
          <li>
            <h5>Type: {type}</h5>
          </li>
        </ul>
      </div>
    );
  }
}

export default ResultCard;
