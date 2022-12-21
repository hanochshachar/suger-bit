import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface sumCarboDetails{
    value: number
}

interface sumAllCarbo{
    value: sumCarboDetails | 0,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: sumAllCarbo = {
    value: 0,
    status: 'idle'
}

const sumAllCarboSlice = createSlice({
    name: 'sumAllCarbo',
    initialState,
    reducers: {
        addSumCarbo: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
});

export const {addSumCarbo} = sumAllCarboSlice.actions;
export default sumAllCarboSlice.reducer;
export const selectedSumCarbo = (state: RootState) => state.sumAllCarbo.value;
export const selectedSumCarboStatus = (state: RootState) => state.sumAllCarbo.status;