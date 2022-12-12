import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface favoritesDetails{
    name: string,
    grams: number,
    carbohydrates: number,
    protein: number,
    fat: number,
    calories: number,
    usercookie: number
  }