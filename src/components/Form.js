import React, { Component } from "react";
import { Typing } from "react-typing";
import SearchBar from "./SearchBar";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
    event.preventDefault();
  }

  handleSubmit(event) {
    this.props.updatePokemon(this.state.userInput);
    event.preventDefault();
  }

  render() {
    const { userInput } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label className="greeting">
          <Typing keyDelay={75}>
            What Pokémon would you like to know about?
          </Typing>
        </label>
        <SearchBar
          userInput={userInput}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </form>
    );
  }
}

export default Form;
