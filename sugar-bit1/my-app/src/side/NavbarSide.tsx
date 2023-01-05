import React from "react";
import { Link } from "react-router-dom";
import dayBook from "../images/dayBook.png";
import home from "../images/home.png";
import reminder from "../images/reminder.png";
import reports from "../images/reports.png";
import settings from "../images/settings.png";
import share from "../images/share.png";
import gauge from "../images/gauge.png";
import tuto from "../images/tuto.png";
import "../style/side.scss";

export const NavbarSide = () => {
  return (
    <div className="sideLink">
      <Link className="linkDe" to="/homeDB">
        <img className='imgLink' src={dayBook} alt="" />
        <h3>יומן</h3>
      </Link>
      <Link className="linkDe" to="/home">
        <img className='imgLink' src={home} alt="" />
        <h3>בית</h3>
      </Link>
      <Link className="linkDe" to="/reminder">
        <img className='imgLink' src={reminder} alt="" />
        <h3>תזכורן</h3>
      </Link>
      <Link className="linkDe" to="/reports">
        <img className='imgLink' src={reports} alt="" />
        <h3>דוחות</h3>
      </Link>
      <Link className="linkDe" to="/settings">
        <img className='imgLink' src={settings} alt="" />
        <h3>הגדרות</h3>
      </Link>
      <Link className="linkDe" to="/share">
        <img className='imgLink' src={share} alt="" />
        <h3>שתף</h3>
      </Link>
      <Link className="linkDe" to="/sugar-gauge">
        <img className='imgLink' src={gauge} alt="" />
        <h3>מד סוכר</h3>
      </Link>
      <Link className="linkDe" to="/tutorials">
        <img className='imgLink' src={tuto} alt="" />
        <h3>הדרכות</h3>
      </Link>
    </div>
  );
};
