import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/navDay.scss'
import smallHome from "../../images/smallHome.png";
import graf from '../../images/graf.png';
import daybook1 from '../../images/daybook1.png';

export const NavDaybook = () => {
  return (
    <div className='linkDay'>
        <Link className='navDay grafButton' to='/graf'>
        <h4 className="content">תרשים</h4>
        <img className="imgNav content" src={graf} alt="" />
        </Link>
        <Link className='navDay daybookButton' to='/homeDB'>
        <h4 className="content">דו"ח יומי</h4>
        <img className="imgNav content" src={daybook1} alt="" />
        </Link>
        <Link className='navDay editButton' to='/edit'>
        <h4 className="content">בית </h4>
        <img className="imgNav content" src={smallHome} alt="" />
        </Link>
    </div>
  )
}
