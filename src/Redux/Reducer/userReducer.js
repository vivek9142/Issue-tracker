import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[{
        "firstName": "cc",
        "lastName": "ccc",
        "location": "blr",
        "email": "blr@w.com",
        "mobNo": 3393933939,
        "password": "password",
        "id": 1
      }],
    isAuthenticated:false,
    authenticatedUser:{}
}

const userReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        registerUser(state,action){
            action.payload.id = state.users.length + 1;
            state.users.push(action.payload);
            state.isAuthenticated=true;
            state.authenticatedUser = action.payload;
        },
        loginUser(state,action){
            const foundUser = state.users.find(user => user.email === action.payload.email && user.password === action.payload.password);
            if(foundUser){
                state.isAuthenticated=true;
                state.authenticatedUser = {...foundUser,password:undefined };
            }
        },
        logoutUser(state){
            state.isAuthenticated=false;
            state.authenticatedUser={};
        }
    }
});

export default userReducer.reducer;

export const userActions = userReducer.actions;