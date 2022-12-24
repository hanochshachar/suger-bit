import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {addPrivateAsync} from './../api/privateValueAPI'


export interface privateValueDetails{
    name: string,
    carbohydrates: number,
    calories: number,
    unit: number,
    grams: number,
    Fats: number,
    proteins: number,
    Cholesterol: number
};

interface privateState{
    value: privateValueDetails | null,
    status: 'idle' | 'loading' | 'failed';
};
const initialState: privateState = {
    value: null,
    status: 'idle'
}
const privateSlice = createSlice({
    name: 'privateValues',
    initialState,
    reducers: {},
    extraReducers:((builder: any) => {
        builder
            .addCase(addPrivateAsync.pending,(state: any) => {
                state.status = 'loading'
            })
            .addCase(addPrivateAsync.fulfilled, (state: any, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(addPrivateAsync.rejected, (state: any)=> {
                state.status = 'failed'
            })
    })
});

export default privateSlice.reducer;
export const selectedPrivateValue = (state: RootState) => state.privateValues.value;
export const privateStatus = (state: RootState) => state.privateValues.status