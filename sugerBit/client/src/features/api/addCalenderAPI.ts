import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { calenderDetails } from "../slices/addCalenderSlice";

export const addCalenderAsync = createAsyncThunk(
    'addCalender',
   async ({name, unit, grams, date, time,
     carbohydrates, withprotein}: calenderDetails) => {
        try {
            
    const {data} = await axios.post('/api-sugar/add-to-calender',
         {name, unit, grams, date,
         time, carbohydrates, withprotein});
         const {results} = data
        console.log(results);
        if (results !== undefined ){
            window.location.reload();
        }
        
        return data
    } catch (error) {
            console.error(error);
            
    }
   }
) 