import React from "react";
import { CharactersContextProvider } from "./context/characteContext";
import { Characters } from "./components/Characters";
function App() {
  return (
    <div className="container">
      <h2 className="text-center alert alert-info ">Rick and Morty</h2>
      <br></br>

      <CharactersContextProvider>
        <Characters />
      </CharactersContextProvider>
    </div>
  );
}

export default App;
