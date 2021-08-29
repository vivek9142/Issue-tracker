import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from './userApi'

const initialState = [];

export const loadUsersAsync = createAsyncThunk(
    'users/loadUsersStatus',
    async () => {
        const response = await UserApi.getAllUsers();
        return response.data;
    }
);

export const addUserAsync = createAsyncThunk(
    'users/addUserStatus',
    async (user, { rejectWithValue }) => {
        try {
            const response = await UserApi.saveUser(user);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteUserAsync = createAsyncThunk(
    'users/deleteUsersStatus',
    async (id) => {
        await UserApi.deleteUser(id);
        return id;
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        // Synchronous actions, if any, should be handled here.
    },
    extraReducers: { // Map Object notation (OR) "Builder Callback" Notation
        [loadUsersAsync.pending]: (state) => {
            console.log("loadUsersAsync pending...");
        },
        [loadUsersAsync.fulfilled]: (state, action) => {
            console.log("loadUsersAsync success...");
            return action.payload;
        },
        [loadUsersAsync.rejected]: (state, action) => {
            console.log("loadUsersAsync error...");
        },
        [addUserAsync.pending]: (state) => {
            console.log("addUserAsync pending...");
        },
        [addUserAsync.fulfilled]: (state, action) => {
            console.log("addUserAsync success...");
            state.push(action.payload);
        },
        [addUserAsync.rejected]: (state, action) => {
            console.log("addUserAsync error...");
            throw (action.payload);
        },
        [deleteUserAsync.pending]: (state) => {
            console.log("deleteUserAsync pending...");
        },
        [deleteUserAsync.fulfilled]: (state, action) => {
            console.log("deleteUserAsync success...");
            return state.filter(user => user.id !== action.payload);
        },
        [deleteUserAsync.rejected]: (state, action) => {
            console.log("deleteUserAsync error...");
        }
    },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
