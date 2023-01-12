import React, { useEffect, useRef } from "react";
import logoSide from "../images/logoSide.png";
import shareBtn from "../images/shareBtn.png";
import { NavbarSide } from "./NavbarSide";

interface boolFun {
  setSideBool: Function;
}

export const Side = ({ setSideBool }: boolFun) => {
  const wrapperRef = useRef<any>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSideBool(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   // dispose
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  },[wrapperRef]);

  
  return (
    <div className="allSide" ref={wrapperRef}>
      <img src={logoSide} alt="" />
      <NavbarSide />
      <img className="shareBtn" src={shareBtn} alt="" />
    </div>
  );
};
