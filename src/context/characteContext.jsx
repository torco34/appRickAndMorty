import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const CharactersContext = createContext();

export const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [actualPages, setActualPages] = useState(1);
  const [prevPages, setPrevPages] = useState(null);
  const [nextPages, setNextPages] = useState(null);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
      if (response.status === 200) {
        const { info, results } = response.data;
        setCharacters(results);
        setTotalResults(info.count);
        setPages(info.pages);
        setPrevPages(info.prev);
        setNextPages(info.next);
      }
    });
  }, []);
  const goToPages = (page, e) => {
    const type = e.target.dataset.type;
    switch (type) {
      case "prev":
        setActualPages(actualPages - 1);
        break;
      case "next":
        setActualPages(actualPages + 1);
        break;
      default:
        return;
    }
    console.log(type);

    Axios.get(page).then((response) => {
      if (response.status === 200) {
        const { info, results } = response.data;
        setCharacters(results);

        setPrevPages(info.prev);
        setNextPages(info.next);
      }
    });
  };
  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResults,
        pages,
        actualPages,
        prevPages,
        nextPages,
        goToPages,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
