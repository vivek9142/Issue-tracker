import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import thunk from 'redux-thunk';

// const url = axios.create({baseURL:'http://localhost:3001'});

// const initialState = {
//     issues:[],
//     status:null
// };

const initialState = {"issues":[
    {
      "description": "On clicking Delete, the application crashes.",
      "severity": "Critical",
      "status": "Open",
      "id": 1
    },
    {
      "description": "The heading Add is wrongly displayed as Edit.",
      "severity": "Minor",
      "status": "Closed",
      "id": 2
    },
    {
      "description": "The payment functionality is missing.",
      "severity": "Major",
      "status": "In Progress",
      "id": 3
    },
    {
      "description": "On adding to cart,the item does not get added.",
      "severity": "Major",
      "status": "Open",
      "id": 4
    }
  ]};
const issueReducer = createSlice({
    name:'issue',
    initialState,
    reducers:{
        initIssue(state,action){
            state.issues = action.payload
        },
        addIssue(state,action){
            action.payload.id=state.issues.length+1;
            state.issues.push(action.payload)
        },
        updateIssue(state,action){
            state.issues = state.issues.map(issue => issue.id === action.payload.id ? action.payload : issue )
        },
        deleteIssue(state,action){
            state.issues = state.issues.filter(issue => issue.id !== action.payload)
        }
    }
});

// export const getIssues  = createAsyncThunk(
//     'issue/getIssues',
//     async () => {
//         return url.get('/issues').then(res => {
//           res.json()  
//         });
//     }
// );
// const issueSlice = createSlice({
//     name:'issue',
//     initialState,
//     extraReducers:{
//         [getIssues.pending]: (state,action) => {
//             state.status='loading';
//         },
//         [getIssues.fulfilled]:(state,action) => {
//             state.issues = action.payload;
//             state.status = 'success';
//         },
//         [getIssues.rejected]: (state,action)=>{
//             state.status='failed'
//         }
//     }
// }); 


// export default issueSlice.reducer;
export default issueReducer.reducer;
export const issueActions =  issueReducer.actions;