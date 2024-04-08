import React, { useEffect, useState } from "react";
import Button from "../../components/button";
import FetchPokemon from "../../api/GetPokemon";
import "./GuessScreen.css";
import { showAlert } from "../../components/dialogs";

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

function RandomPokemon() {
  const [pokemon, setPokemon] = useState<PokemonObject>();
  const [firstCall, setCall] = useState(true);
  const [pokemonInput, setInput] = useState("");
  const [correctAnswer, setCorrect] = useState(0);
  const [totalAnswer, setTotal] = useState(0);

  async function PokemonAttributes() {
    let poke = await FetchPokemon(0);
    setPokemon(poke);
  }

  if (firstCall) {
    PokemonAttributes();
    setCall(false);
  }

  function SubmitAnswer() {
    setTotal(totalAnswer + 1);
    if (pokemonInput.toLowerCase() == pokemon?.name.toLowerCase()) {
      setCorrect(correctAnswer + 1);
      showAlert("Correct", "You guessed the pokemon!");
    } else {
      showAlert("Wrong", "You suck...");
    }
    setInput("");
    PokemonAttributes();
  }

  let height = pokemon?.height as number;
  let weight = pokemon?.weight as number;
  height = Math.round(height * 3.937);
  weight = Math.round(weight / 4.536);
  return (
    <div className="flexBox">
      <p>Height: {height} inches</p>
      <p>Weight: {weight} lbs</p>
      <p>First letter: {pokemon?.name.charAt(0).toUpperCase()}</p>
      {pokemon?.types.map((type) => (
        <p key={type.type.id}>
          Type {type.slot}: {type.type.name}
        </p>
      ))}
      <input
        className="default-input"
        placeholder="Pokemon"
        value={pokemonInput}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={SubmitAnswer} buttonText={"Submit Answer"} />
      <p>
        Number Correct {correctAnswer}/{totalAnswer}
      </p>
    </div>
  );
}

export default RandomPokemon;
