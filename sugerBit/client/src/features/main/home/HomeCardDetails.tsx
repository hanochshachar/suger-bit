import React, { useState } from 'react';
import "../../../style/home.scss";

interface homeDetails{
  name: string,
  unit: number,
  carbohydrates: number,
  id: number
}

export const HomeCardDetails = ({name, unit, carbohydrates, id}: homeDetails) => {
  
  const handleDelete = async(id: number) => {
      
  }
  return (
    <div className='totalDetails' >
      <button onClick={()=>handleDelete(id)}>-</button>
      <h4>גר' {carbohydrates}</h4>
      <h4>מנה {unit}</h4>
      <h4>{name}</h4>
    </div>
  )
}
