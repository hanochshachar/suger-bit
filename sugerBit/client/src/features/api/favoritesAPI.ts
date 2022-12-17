import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { favoritesDetails } from "../slices/favoritesSlice";

export const addFavoritesAsync = createAsyncThunk(
    'addFavorites',
   async ({name, unit, grams, carbohydrates,
     withprotein}: favoritesDetails) => {
        try {
        const {data} = await axios.post('/api-sugar/add-favorites',
         {name, unit, grams, carbohydrates, withprotein})
        return data
    } catch (error) {
        console.error(error);
        
    }
   }
)

export const getFavorites = createAsyncThunk(
    'getFavorites',
   async () => {
            const {data} = await axios.get('/api-sugar/get-favorites');
            return data
            
   }
)