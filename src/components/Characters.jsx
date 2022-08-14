import React, { useContext } from "react";
import { CharactersContext } from "../context/characteContext";

function Characters() {
  const { characters } = useContext(CharactersContext);
  console.log(characters);
  // const obj = characters;

  return (
    <div className="row">
      {characters.map((character) => {
        return (
          <div className="col-4" key={character.name}>
            <div className="card mb-5">
              <img
                src={character.image}
                className="card-img-top"
                alt={character.name}
              />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <b>Status</b>
                  <br />
                  <b>Status</b>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export { Characters };
