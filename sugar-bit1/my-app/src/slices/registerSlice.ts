import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { addUserAsync } from '../api/regAPI';

export interface RegisterDetails{
    firstName:string,
    lastName:string,
    id?:string,
    email:string,
    password?:string,
    cookie: string,
};
export interface RegisterState{
    user: RegisterDetails | null,
    status: 'idle' | 'loading' | 'failed';
}

const initialState: RegisterState = {
    user: null,
    status: 'idle',
}

const registerSlice = createSlice({
    name: 'addUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUserAsync.pending, (state) => {
                state.status = 'loading';
              })
            .addCase(addUserAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'idle';
                // const {user} = action.payload;
                // state.user = user;
                state.user = action.payload
            })
            .addCase(addUserAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export default registerSlice.reducer;
export const selectedUser:any = (state: RootState) => state.register.user;
export const selectedUserStatus = (state: RootState) => state.register.status;