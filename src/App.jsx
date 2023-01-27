import React from "react";
import { CharactersContextProvider } from "./context/characteContext";
import { Characters } from "./components/Characters";
import "./App.css";
function App() {
  return (
    <div className="containerApp">
      <div className="container ">
        <h2 className="text-center  ">Rick and Morty</h2>
        <br />

        <CharactersContextProvider>
          <Characters />
        </CharactersContextProvider>
      </div>
    </div>
  );
}

export default App;
