import "./App.css";
import { SplashScreen } from "./pages/splashScreen/splashScreen.tsx";
import { HomeScreen } from "./pages/homeScreen/homescreen.tsx";
import { PokedexScreen } from "./pages/pokedexScreen/pokedexScreen.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomPokemon from "./pages/guessScreen/RandomPokemon.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "home",
    elment: <HomeScreen />,
  },
  {
    path: "pokedex",
    element: <PokedexScreen />,
  },
  {
    path: "guessgame",
    element: <RandomPokemon />,
  },
]);

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  });

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
