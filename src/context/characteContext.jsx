import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const [character, setCharacters] = useState([]);
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      if (response.status == 200) {
        console.log(response.data);
        setCharacters(response.data);
      }
    });
  }, []);
  return (
    <CharactersContext.Provider value={{ character }}>
      {children}
    </CharactersContext.Provider>
  );
};
