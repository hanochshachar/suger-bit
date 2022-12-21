import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const allValuesAsync = createAsyncThunk(
    'allValues',
   async () => {
        const {data} = await axios.get('/api-sugar/all-values')
     //    console.log(data);
        
        // const {results} = data;
        // console.log(results);
        
        return data
   }
)