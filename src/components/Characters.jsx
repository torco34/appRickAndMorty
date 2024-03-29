import React, { useContext } from "react";

import { CharactersContext } from "../context/characteContext";
import "../App.css";
import { Pagination } from "../components/Pagination";
function Characters() {
  const { characters } = useContext(CharactersContext);
  return (
    <>
      <Pagination />
      <div className="containerCaracter">
        {characters.map((character, idx) => {
          return (
            <div className="" key={character.name + idx}>
              <div className="card mt-5">
                <img
                  src={character.image}
                  className="card-img-top"
                  alt={character.name}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {character.name} - {idx}
                  </h5>
                  <p className="card-text">
                    <b>Status :{character.name}</b>
                    <br />
                    <b>Status: {character.species}</b>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Characters };
