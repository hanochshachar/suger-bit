import React from 'react'
import { Link } from 'react-router-dom'

export const NavDaybook = () => {
  return (
    <div>
        <Link className='daybookButton' to='/homeDB'>יומן</Link>
        <Link className='editButton' to='/edit'>עריכה</Link>
        <Link className='grafButton' to='/graf'>תרשים</Link>
    </div>
  )
}
