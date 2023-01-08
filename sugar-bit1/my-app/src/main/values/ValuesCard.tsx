import React from "react";
import { valuesDetails } from "../../slices/valuesSlice";
import { useState } from "react";
import "../../style/values.scss";
import { useDispatch } from "react-redux";
import { addFavoritesAsync } from "../../api/favoritesAPI";
import { favoritesDetails } from "../../slices/favoritesSlice";
import { addToCal } from "../../slices/calenderStartSlice";
import { selectedCalender } from "../../slices/calenderStartSlice";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import star from '../../images/star.png'

export const ValuesCard = ({
  id2,
  name,
  unit,
  Weight,
  carbohydrates,
  withprotein,
}: valuesDetails) => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedStart = useAppSelector(selectedCalender);
  const grams = Weight;

  const handleAddFavorites = (ev: any) => {
    try {
      dispatch(
        addFavoritesAsync({ name, unit, grams, carbohydrates, withprotein })
      );
      ev.stopPropagation();
    } catch (error) {
      console.error(error);
    }
  };
  const handleCalender = (ev: any) => {
    dispatch(addToCal({ name, unit, grams, carbohydrates, withprotein }));
    console.log(name, unit, grams, carbohydrates, withprotein);

    console.log(selectedStart);
  };
  return (
    <div className="value" onClick={handleCalender}>
      <h4>{carbohydrates} גרם </h4>
      <h4>{unit} 1</h4>
      <div onClick={handleAddFavorites}><img className="favStar" src={star} alt="" /></div>
      <h4>{name}</h4>
    </div>
  );
};
