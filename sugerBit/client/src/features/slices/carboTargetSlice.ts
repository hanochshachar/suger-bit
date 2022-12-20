import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getTargetAsync } from "../api/targetAPI";

export interface targetDetails{
    date: string,
    target: number,
}

interface target{
    value: targetDetails[] | [],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: target = {
    value: [],
    status: 'idle'
} 

const carboTargetSlice = createSlice({
    name: 'carboTarget',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(getTargetAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getTargetAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(getTargetAsync.rejected, (state) =>{
                state.status = 'failed'
            })
    })
});

export default carboTargetSlice.reducer;
export const selectedCarboTarget = (state: RootState) => state.addCarboTarget.value;
export const selectedTargetStatus = (state: RootState) => state.addCarboTarget.status;





















