import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateValueDetails } from "../slices/privateValueSlice";
import axios from "axios";

export const addPrivateAsync = createAsyncThunk(
    'addPrivate',
   async ({ name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol}: privateValueDetails) => {
          try {
               const {data} = await axios.post('/api-sugar/private-value',
                { name, carbohydrates, calories, unit, grams, Fats, proteins, Cholesterol});
                console.log(data);
               return data
     } catch (error) {
          console.error(error);
          
     }
        
   }
)