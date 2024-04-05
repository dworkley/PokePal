import React, { useState, useEffect } from "react";
import Button from "../components/button";
import "../App.css";

interface PokemonObject {
  id: number;
  weight: number;
  height: number;
  name: string;
  types: PokemonType[];
}

interface PokemonType {
  slot: number;
  type: Type;
}

interface Type {
  id: number;
  name: string;
}

function GetRandomNumber() {
  const max = 1025;
  return Math.floor(Math.random() * +max);
}

const FetchPokemon = async (id: number) => {
  const [pokemon, setPokemon] = useState<PokemonObject>();
  const pokeId = id <= 0 ? GetRandomNumber() : id;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeId);
  try {
    const responseJson = (await response.json()) as PokemonObject;
    setPokemon(responseJson);
  } catch (err) {
    console.error(err);
  }

  const PokemonAttributes = () => {
    let height = pokemon?.height as number;
    let weight = pokemon?.weight as number;
    height = Math.round(height * 3.937);
    weight = Math.round(weight / 4.536);
    return (
      <div>
        <p>Height: {height} inches</p>
        <p>Weight: {weight} lbs</p>
        {pokemon?.types.map((type) => (
          <p key={type.type.id}>
            Type {type.slot}: {type.type.name}
          </p>
        ))}
      </div>
    );
  };

  return (
    <>
      <PokemonAttributes />
      <input className="default-input" placeholder="Pokemon" />
      <Button onClick={submitAnswer} buttonText={"Check Answer"} />
      <Button onClick={FetchPokemon} buttonText={"New Pokemon"} />
    </>
  );
};

const submitAnswer = () => {};

export default FetchPokemon;
