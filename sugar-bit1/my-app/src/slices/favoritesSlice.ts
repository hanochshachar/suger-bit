import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { addFavoritesAsync } from "../api/favoritesAPI";

export interface favoritesDetails{
    name: string,
    unit: string,
    grams: number,
    carbohydrates: number,
    withprotein: number
  }

  interface favorites{
    value: favoritesDetails | null,
    status: 'idle' | 'loading' | 'failed';
  }

  const initialState: favorites = {
    value: null,
    status: 'idle'
  }

  const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers:((builder) => {
      builder
        .addCase(addFavoritesAsync.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(addFavoritesAsync.fulfilled, (state, action: PayloadAction<any>) => {
          state.status = 'idle';
          state.value = action.payload
        })
        .addCase(addFavoritesAsync.rejected, (state) => {
          state.status = 'failed'
        })
    })
  })

  export default favoritesSlice.reducer;
  export const selectedFavorites = (state: RootState) => state.addFavorites.value;
  export const selectedFavoritesStatus = (state: RootState) => state.addFavorites.status;