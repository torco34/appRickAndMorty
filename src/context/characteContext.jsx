import { createContext } from "react";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  return (
    <CharactersContext.Provider value={"Rick and Morty"}>
      {children}
    </CharactersContext.Provider>
  );
};
