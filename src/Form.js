import React, { Component } from "react";
import pokeball from "./images/pokeball.svg";
import { Typing } from "react-typing";

class Form extends Component {
  render() {
    const { inputData } = this.props;

    const SearchBar = () => {
      return (
        <div className="">
          <input className="userInput" type="text" />

          <img
            className="pokeball"
            type="image"
            src={pokeball}
            onClick={() => {
              alert(inputData);
            }}
            alt="pokeball submit button"
          />
        </div>
      );
    };

    return (
      <form>
        <label className="vertical-center greeting">
          <Typing keyDelay={75}>
            What Pokémon would you like to know about?
          </Typing>
        </label>
        <SearchBar />
      </form>
    );
  }
}

export default Form;
