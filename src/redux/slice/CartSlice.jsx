import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice = createSlice({
    name:"cart",
    initialState:[],

    reducers:{
        add:{},
        remove:{}
    }
})

export const{add,remove} = CounterSlice.actions;
export default CounterSlice.reducer;
