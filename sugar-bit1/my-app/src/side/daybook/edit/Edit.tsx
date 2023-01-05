import React from "react";
import { NavDaybook } from "../NavDaybook";

export const Edit = () => {
  return (
    <>
      <div className="top">
        <div className="V">V</div>
        <button><h1>הזן ערכים</h1></button>
        <div className="X">X</div>
      </div>
      <NavDaybook />
      </>
  );
};
