import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterDetails } from "../slices/registerSlice";
import axios from "axios";

export const addUserAsync = createAsyncThunk(
    'addUser',
    async({firstName, lastName, id, email, password, cookie}:RegisterDetails) => {
        try {
            console.log(firstName, lastName, id, email, password, cookie);
            
            const {data} = await axios.post('/api-sugar/add-user', 
            {firstName, lastName, id, email, password, cookie});
            console.log(data);
            const {ok} = data
            return ok
            
        } catch (error) {
            console.error(error);
            
        }
    }
)