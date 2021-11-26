import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const url = axios.create({baseURL:'http://localhost:3001'});

export const registerUser  = createAsyncThunk(
    'user/registerUser',
    async (user,{ rejectWithValue }) => {
        const response = await url.get(`/users/`);
        const foundUser = response.data.find(usr=> usr.email === user.email);
        if(!foundUser){
        const res = await url.post('/users',user);
          return res.data;
        } else return rejectWithValue(`User with Email ${user.email} already exists. Go to login`);
    }
);

export const loginUser  = createAsyncThunk(
    'user/loginUser',
    async (userData,{ rejectWithValue }) => {
        const response = await url.get(`/users/`);
        if(!response) return rejectWithValue('Server not responding');

        const foundUser = response.data.find(user => user.email === userData.email);
        if(foundUser){
            if(foundUser.password === userData.password){
                return foundUser;
            }
            else return rejectWithValue('Wrong Email or Password'); 
        }
        else return rejectWithValue(`Account with Email ${userData.email} doesn't exist`); 
    }
);