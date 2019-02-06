import React, { Component } from "react";
import { Typing } from "react-typing";
import SearchBar from "./SearchBar";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { inputData, handleOnClick } = this.props;

    return (
      <form>
        <label className="vertical-center greeting">
          <Typing keyDelay={75}>
            What Pokémon would you like to know about?
          </Typing>
        </label>
        <SearchBar inputData={inputData} handleOnClick={handleOnClick} />
      </form>
    );
  }
}

export default Form;
