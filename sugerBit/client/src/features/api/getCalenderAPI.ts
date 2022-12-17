import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface date{
    date: string
}

export const getCalenderAsync = createAsyncThunk(
    'getCalender',
   async ({date}: date) => {
        try {
            const {data} = await axios.get(`/api-sugar/get-calender?date=${date}`)
            console.log(data);
            return data
            
        } catch (error) {
            console.log(error);
            
        }
   }
)