import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {allValuesAsync} from '../api/valuesAPI';

export interface valuesDetails{
    id2: number,
    name: string,
    unit: string,
    Weight: number,
    carbohydrates: number,
    withprotein: number
};

export interface valuesState{
    values: valuesDetails[] | null,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: valuesState = {
    values: null,
    status: 'idle'
}

const valuesSlice = createSlice({
    name: 'allValues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allValuesAsync.pending, (state) =>{
                state.status = 'loading'
            })    
            .addCase(allValuesAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                state.values = action.payload;
                
            })
            .addCase(allValuesAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
}) 

export default valuesSlice.reducer;
export const selectedValues = (state: RootState) => state.allValues.values;
export const selectedValuesStatus = (state: RootState) => state.allValues.status;