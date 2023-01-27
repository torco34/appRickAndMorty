import React, { useContext } from "react";
import { CharactersContext } from "../context/characteContext";
import "../App.css";
function Pagination() {
  const { totalResults, pages, actualPages, prevPages, nextPages, goToPages } =
    useContext(CharactersContext);
  return (
    <>
      <div className="containerPaginacion">
        <div className=" col-3  d-flex aling-item-center">
          <b>total resultado: {totalResults} </b>
        </div>
        <div className="col-3 d-flex aling-item-center">
          <b>
            page {actualPages} of {pages}
          </b>
        </div>
        <div className="col-3 d-flex aling-item-center ">
          <b>go to page </b>
          <select
            name="goTo"
            className="form-select w-auto mx-1"
            // value={actualPages}
            data-type="goTo"
            onChange={(e) => goToPages("", e)}
          >
            {Array.from(Array(pages).keys()).map((page) => {
              return (
                <option key={page + 1} value={page + 1}>
                  {page + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-3 d-flex aling-item-centertext-end">
          {prevPages && (
            <button
              className="btn btn-dark mx-2"
              data-type="prev"
              onClick={(e) => goToPages(nextPages, e)}
            >
              Prev
            </button>
          )}
          {nextPages && (
            <button
              className="btn btn-dark"
              data-type="next"
              onClick={(e) => goToPages(nextPages, e)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export { Pagination };
