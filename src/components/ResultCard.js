import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  margin: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 15px 50px grey;
  width: 80vw;
  @media (min-width: 400px) {
    width: 60vw;
  }
  @media (min-width: 900px) {
    width: 25vw;
  }
  @media (min-width: 1600px) {
    width: 15vw;
  }
`;

const List = styled.ul`
  margin: 40px;
  list-style-type: none;
  padding-left: 0;
`;

function ResultCard({ pokemonData }) {
  const { name, id, height, type, sprite } = pokemonData;
  return (
    <Card>
      <h1>{name}</h1>
      <img style={{ height: "8em" }} src={sprite} alt="pokemon-pic" />
      <List>
        <li>
          <h5>ID: {id}</h5>
        </li>
        <li>
          <h5>Height: {height}</h5>
        </li>
        <li>
          <h5>Type: {type}</h5>
        </li>
      </List>
    </Card>
  );
}

export default ResultCard;
