import React, { Component } from "react";
import pokeball from "./images/pokeball.svg";

class Form extends Component {
  render() {
    return (
      <form>
        <label className="vertical-center greeting">
          What Pokémon would you like to know about?
        </label>
        <div className="vertical-center">
          <input
            className="userInput"
            type="text"
            placeholder=""
            onChange={e => this.setState({ pokemonName: e.target.value })}
          />

          <input
            className="pokeball"
            type="image"
            src={pokeball}
            alt="pokeball submit button"
          />
        </div>
      </form>
    );
  }
}

export default Form;
