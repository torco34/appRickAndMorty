import React, { useContext } from "react";
import { CharactersContext } from "../context/characteContext";
function Characters() {
  const test = useContext(CharactersContext);
  return (
    <div className="row">
      <div className="col-4">
        <h2 className=" alert alert-danger">Nome</h2>
        <p>{test}</p>
      </div>
    </div>
  );
}

export { Characters };
