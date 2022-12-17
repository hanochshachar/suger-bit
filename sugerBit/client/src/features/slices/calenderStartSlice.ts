import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface calDetailsStart{
    name: string,
    unit: string,
    grams: number,
    carbohydrates: number,
    withprotein: number
};

interface calender{
    value: calDetailsStart[] | [],
    status: 'idle' | 'loading' | 'failed'
};

const initialState: calender = {
    value: [],
    status: 'idle'
};

const calenderStartSlice = createSlice({
    name: 'calenderStart',
    initialState,
    reducers: {
        addToCal: (state, action: PayloadAction<any>) => {
            state.value = [...(state.value || []), action.payload]
            // if(state.value == null){
            //     state.value = action.payload
            // }else state.value = [...state.value, action.payload]
            // state.value !== null ? state.value = [...state.value, action.payload]:
            //  state.value = state.value
        }
    }
});

export const {addToCal} = calenderStartSlice.actions;
export default calenderStartSlice.reducer;
export const selectedCalender = (state: RootState) => state.startCalender.value;
export const selectedCalenderStatus = (state: RootState) => state.startCalender.status;
