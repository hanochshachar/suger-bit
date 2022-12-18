import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface targetDetails{
    value: number
}

interface target{
    value: targetDetails | 0,
    status: 'idle' | 'loading' | 'failed'
}

const initialState: target = {
    value: 0,
    status: 'idle'
} 

const carboTargetSlice = createSlice({
    name: 'carboTarget',
    initialState,
    reducers: {
        addTarget: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
});

export const {addTarget} = carboTargetSlice.actions;
export default carboTargetSlice.reducer;
export const selectedCarboTarget = (state: RootState) => state.addCarboTarget.value;
export const selectedTargetStatus = (state: RootState) => state.addCarboTarget.status;





















