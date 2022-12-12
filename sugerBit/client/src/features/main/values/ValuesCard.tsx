import React from 'react';
import { valuesDetails } from '../../slices/valuesSlice';
import { useState } from 'react';
import '../../../style/values.scss';

export const ValuesCard = ({id2, name, unit, Weight, 
  carbohydrates, withprotein}: valuesDetails) => {
    const handleAddFavorites = ()=> {

    }

    return (
    <div className='value'>
        <h4>{Weight} ק"ג </h4>
        <h4>{unit} 1</h4>
        <button onClick={handleAddFavorites}>*</button>
        <h4>{name}</h4>
    </div>
  )
}
