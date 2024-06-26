import React, { Component } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./Home.css";
import "../../App.css";

export class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="titleArea">
          <h1>PokePal</h1>
        </div>

        <div className="buttonsContainer">
          <button className="menuButton dexButton">
            <Link to={"pokedex"} className="navLink">
              Pokedex
            </Link>
          </button>
          <button className="menuButton btlButton">Battle Simulator</button>
          <button className="menuButton gesButton">
            <Link to={"guessgame"} className="navLink">
              Guess That Pokemon
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
