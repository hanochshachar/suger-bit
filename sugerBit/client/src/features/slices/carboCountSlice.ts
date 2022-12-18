import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface carboCountDetails{
    value: number
}

interface carboCount{
    value: carboCountDetails | 0,
    status: 'idle' | 'loading' | 'failed'
}

const initialState:carboCount = {
    value: 0,
    status: 'idle'
}

const carboCountSlice = createSlice({
    name: 'carboCount',
    initialState,
    reducers: {
        addCarboCount: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const {addCarboCount} = carboCountSlice.actions;
export default carboCountSlice.reducer;
export const selectedCarboCount = (state: RootState) => state.carboCount.value;
export const selectedCountStatus = (state: RootState) => state.carboCount.status;