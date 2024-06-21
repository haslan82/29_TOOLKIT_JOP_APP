import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    jobs:[],
    isLoading: false,
    error: null,
}

 const jobSlice =  createSlice({
name:"job",
initialState,
reducers:{
    setLoading:(state)=> {
        state.isLoading=true;
    },
}
})

export default jobSlice.reducer;