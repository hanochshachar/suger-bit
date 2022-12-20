import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface getTarget{
    date: string
}

export const getTargetAsync = createAsyncThunk(
    'getTarget',
   async ({date}: getTarget) => {
    try {
        const {data} = await axios.get
        (`/api-sugar/get-target?date=${date}`)
        return data
    } catch (error) {
        console.error(error);
        
    }
   }
) 