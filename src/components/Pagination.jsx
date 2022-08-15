import React, { useContext } from "react";
// context
import { CharactersContext } from "../context/characteContext";

function Pagination() {
  const { totalResults, pages, actualPages, prevPages, nextPages, goToPages } =
    useContext(CharactersContext);
  return (
    <>
      <div className="col-3  d-flex aling-item-center">
        <b>total resultado: {totalResults} </b>
      </div>
      <div className="col-3 d-flex aling-item-center">
        <b>
          page {actualPages} of {pages}
        </b>
      </div>
      <div className="col-3 d-flex aling-item-center ">
        <b>go to page </b>
        <select name="goTo" className="form-select w-auto mx-1">
          <option value="1">1</option>
        </select>
      </div>
      <div className="col-3 d-flex aling-item-centertext-end">
        {prevPages && (
          <button
            className="btn btn-info mx-2"
            data-type="prev"
            onClick={(e) => goToPages(nextPages, e)}
          >
            Prev
          </button>
        )}
        {nextPages && (
          <button
            className="btn btn-info"
            data-type="next"
            onClick={(e) => goToPages(nextPages, e)}
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export { Pagination };
