import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    status: false,
    userData: null
}; 

const authSlice = createSlice({
    name:'auth',
    initialState: initialstate,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }
    }
});


export default authSlice.reducer;
export const { login, logout } = authSlice.actions;