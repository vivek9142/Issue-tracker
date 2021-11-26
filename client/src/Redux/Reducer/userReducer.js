import { createSlice } from "@reduxjs/toolkit";
import { registerUser,loginUser } from "../Actions/UserActions";

const initialState = {
    isAuthenticated:false,
    authenticatedUser:{},
    error:'',
    status:''
}

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        logoutUser(state){
            state.isAuthenticated=false;
            state.authenticatedUser={};
        },
        resetErrorStatus(state){
            state.error='';
            state.status='success'
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(registerUser.pending,(state) => {
           state.status='loading';
       }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isAuthenticated=true;
            state.authenticatedUser = action.payload;
            state.status = 'success';
            state.error='';
       }).addCase(registerUser.rejected,(state,action)=>{
        state.status='failed';
        state.error = action.payload || action.error.message;
       })
       builder.addCase(loginUser.pending,(state)=>{
           state.status='loading'
       }).addCase(loginUser.fulfilled,(state,action)=>{
           if(action.payload){
            state.isAuthenticated=true;
            state.authenticatedUser = {...action.payload,password:undefined };
            state.error='';
            state.status='success';
            }
       }).addCase(loginUser.rejected,(state,action)=>{
           state.status='failed';
           state.error = action.payload || action.error.message;
       })
    }
});

export default userReducer.reducer;

export const userActions = userReducer.actions;