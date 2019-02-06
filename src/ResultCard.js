import React, { Component } from "react";

class ResultCard extends Component {
  render() {
    return (
      <div className="card">
        <ul>
          <li>
            <h1>
              {this.props.pokemonName.charAt(0).toUpperCase() +
                this.props.pokemonName.slice(1)}
            </h1>
          </li>
          {/* <li>{this.props.pokemonData.types[0].name}</li> */}
          {/* <li>{JSON.stringify(this.props.pokemonData)}</li> */}
        </ul>
        <ul>
          {[this.props.pokemonData].map((item, index) => (
            // <li key={index}>{[[item.abilities][0]].name}</li>
            // <li key={index}>{[[item.types][0]].slot}</li>
            <li key={index}>{item.height}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ResultCard;
