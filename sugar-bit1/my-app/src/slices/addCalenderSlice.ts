import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { addCalenderAsync } from "../api/addCalenderAPI";

export interface calenderDetails{
    name: string,
    unit: string, 
    grams: number,
    date: string,
    time: string,
    carbohydrates: number,
    withprotein: number
};

interface addCalender{
    value: calenderDetails | [],
    status: 'idle' | 'loading' | 'failed'
}

const initialState: addCalender = {
    value: [],
    status: 'idle'
}

const addCalenderSlice = createSlice({
    name: 'addToCalender',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(addCalenderAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(addCalenderAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(addCalenderAsync.rejected, (state) => {
                state.status = 'failed'
            })
    })
});

export default addCalenderSlice.reducer;
export const selectedCalender = (state: RootState) => state.addCalender.value;
export const selectedCalenderStatus = (state: RootState) => state.addCalender.status
