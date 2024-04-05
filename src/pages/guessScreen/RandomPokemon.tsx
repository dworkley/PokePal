import React, { useState } from "react";
import Button from "../../components/button";
import "../App.css";
import FetchPokemon from "../../api/GetPokemon";

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

const PokemonAttributes = async () => {
  const [pokemon, setPokemon] = useState<PokemonObject>();
  let poke = await FetchPokemon(0);
  setPokemon(poke);
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
      <input className="default-input" placeholder="Pokemon" />
      <Button onClick={PokemonAttributes} buttonText={"New Pokemon"} />
    </div>
  );
};

export default PokemonAttributes;
