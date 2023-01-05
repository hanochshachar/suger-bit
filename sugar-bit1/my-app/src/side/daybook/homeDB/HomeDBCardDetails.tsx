import React from 'react';
import '../../../../src/style/homeDB.scss'

interface homeDetails{
  name: string,
  unit: number,
  carbohydrates: number,
  id: number
}

export const HomeDBCardDetails = ({name, unit, carbohydrates, id}: homeDetails) => {
  return (
    <div className='daybookDetails'>
    <h4>גר' {carbohydrates}</h4>
    <h4>מנה {unit}</h4>
    <h4>{name}</h4>
    </div>
  )
}
