import { useState } from "react";

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

const FetchPokemon = async (id: number) => {
  const pokeId = id <= 0 ? GetRandomNumber() : id;
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeId);
  try {
    const responseJson = (await response.json()) as PokemonObject;
    return responseJson;
  } catch (err) {
    console.error(err);
  }
};

function GetRandomNumber() {
  const max = 1025;
  return Math.floor(Math.random() * +max);
}

export default FetchPokemon;
