import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getCalenderAsync } from "../api/getCalenderAPI";

export interface calenderDetails{
    id: number,
    name: string,
    unit: number,
    grams: number,
    date: string,
    time: string,
    suger: number,
    insulin: number,
    carbohydrates: number,
    withprotein: number
};

interface getCalender{
    value: calenderDetails[] | [],
    status: 'idle' | 'loading' | 'failed'
};

const initialState: getCalender = {
    value: [],
    status: 'idle'
};

const getCalenderSlice = createSlice({
    name: 'getCalender',
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(getCalenderAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCalenderAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.value = action.payload
            })
            .addCase(getCalenderAsync.rejected, (state) => {
                state.status = 'failed'
            })
    })
});

export default getCalenderSlice.reducer;
export const getCalenderSelected = (state: RootState) => state.getCalender.value;
export const getCalStatusSelected = (state: RootState) => state.getCalender.status;