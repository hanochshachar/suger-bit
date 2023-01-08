import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss";
import smallHome from "../images/smallHome.png";
import star from "../images/star.png";
import list from "../images/list.png";

export const Navbar = () => {
  return (
    <div className="link">
      <Link className="homeButton nav" to="/home">
        <h4 className="content">בית </h4>
        <img className="imgNav content" src={smallHome} alt="" />
      </Link>
      <Link className="favoritesButton nav" to="/favorites">
        <h4 className="content">מועדפים</h4>
        <img className="imgNav content" src={star} alt="" />
      </Link>
      <Link className="valuesButton nav" to="/values">
        <h4 className="content">רשימה</h4>{" "}
        <img className="imgNav content" src={list} alt="" />
      </Link>
    </div>
  );
};
