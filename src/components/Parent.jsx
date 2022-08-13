import React from "react";
import { Child } from "./Child";
import { SubChald } from "./SubChild";
const Parent = ({ userData }) => {
  return (
    <>
      <h1>Parent</h1>

      <Child userData={userData} />
    </>
  );
};

export { Parent };
