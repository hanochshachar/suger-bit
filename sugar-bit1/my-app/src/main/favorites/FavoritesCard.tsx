import React from 'react'
import { detailsFavorites } from '../../slices/getFavoritesSlice';
import omelet from '../../images/omlet.jpg';
import { useDispatch } from 'react-redux';
// import { AppDispatch } from '../../../app/store';
import { addToCal, selectedCalender } from '../../slices/calenderStartSlice';
import { AppDispatch } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
// import { useAppSelector } from '../../../app/hooks';


export const FavoritesCard = ({id, name, unit, grams, carbohydrates,
  withprotein, usercookie, image}: detailsFavorites) => {
    const dispatch = useDispatch<AppDispatch>()
    const selectedStart = useAppSelector(selectedCalender)
    const handleCalender =()=>{
     dispatch(addToCal({name, unit, grams, carbohydrates,withprotein})) ;
     console.log(name, unit, grams, carbohydrates,withprotein);
    };
    
    
    
  return (
    <div onClick={handleCalender}>
      <img src={omelet} alt="food-image" />
      <h3>{name}</h3>
    </div>
  )
}
