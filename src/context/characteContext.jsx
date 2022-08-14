import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        const { results } = response.data;
        setCharacters(results);
      }
    });
  }, []);
  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
};
