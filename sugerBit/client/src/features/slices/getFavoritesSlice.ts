import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getFavorites } from "../api/favoritesAPI";

export interface detailsFavorites{
    id: number,
    name: string,
    unit: string,
    grams: number,
    carbohydrates: number,
    withprotein: number,
    usercookie: number,
    image: number
}

interface favorites{
    value: detailsFavorites[] | null,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: favorites = {
    value: null,
    status: 'idle'
}

const getFavoritesSlice = createSlice({
    name: 'getFavorites',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(getFavorites.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getFavorites.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(getFavorites.rejected, (state) => {
                state.status = 'failed'
            })
    })
})

export default getFavoritesSlice.reducer;
export const getFavoritesSelected = (state: RootState) => state.getFavorites.value;
export const getStatusFavoritesSelected = (state: RootState) => state.getFavorites.status;