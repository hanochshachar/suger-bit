import React from 'react';
import { valuesDetails } from '../../slices/valuesSlice';
import { useState } from 'react';
import '../../../style/values.scss';
import { useDispatch } from 'react-redux';
import { addFavoritesAsync } from '../../api/favoritesAPI';
import { favoritesDetails } from '../../slices/favoritesSlice';
import { AppDispatch } from '../../../app/store';
import { addToCal } from '../../slices/calenderStartSlice';
import { selectedCalender } from '../../slices/calenderStartSlice';
import { useAppSelector } from '../../../app/hooks';

export const ValuesCard = ({id2, name, unit, Weight, 
  carbohydrates, withprotein}: valuesDetails ) => {
    const dispatch = useDispatch<AppDispatch>()
    const selectedStart = useAppSelector(selectedCalender)
    const grams = Weight
    
    const handleAddFavorites = ()=> {
      try {
          dispatch(addFavoritesAsync({name, unit, grams, 
          carbohydrates, withprotein}))
      } catch (error) {
        console.error(error);
        }
    }
    const handleCalender =()=>{
      dispatch(addToCal({name, unit, grams, carbohydrates,withprotein})) ;
      console.log(name, unit, grams, carbohydrates,withprotein);
      // const result = new Date().toLocaleDateString('sv').replaceAll('-', '');
      // console.log(result);
      
     }
    return (
    <button className='value' onClick={handleCalender}>
        <h4>{carbohydrates} גרם </h4>
        <h4>{unit} 1</h4>
        <button onClick={handleAddFavorites}>*</button>
        <h4>{name}</h4>
        </button>
  )
}
