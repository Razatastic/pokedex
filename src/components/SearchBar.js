import React from "react";
import pokeball from "../assets/pokeball.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 90vw;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 75vw;
  border-radius: 10px;
  font-size: 1em;
  text-align: center;
  border-color: white;
`;

const Image = styled.img`
  width: 3em;
  margin-left: 10px;
`;

const SearchBar = ({ userInput, handleChange, handleSubmit }) => (
  <Container>
    <Input
      type="text"
      name="pokemon"
      value={userInput}
      onChange={handleChange}
      placeholder={"Enter your pokémon"}
    />

    <Image
      className="pokeball"
      type="image"
      src={pokeball}
      alt="pokeball submit button"
      onClick={handleSubmit}
    />
  </Container>
);

export default SearchBar;
