import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import thunk from 'redux-thunk';

const url = axios.create({baseURL:'http://localhost:3001'});

const initialState = {
    issues:[],
    status:null
};

// const initialState = {"issues":[
//     {
//       "description": "On clicking Delete, the application crashes.",
//       "severity": "Critical",
//       "status": "Open",
//       "id": 1
//     },
//     {
//       "description": "The heading Add is wrongly displayed as Edit.",
//       "severity": "Minor",
//       "status": "Closed",
//       "id": 2
//     },
//     {
//       "description": "The payment functionality is missing.",
//       "severity": "Major",
//       "status": "In Progress",
//       "id": 3
//     },
//     {
//       "description": "On adding to cart,the item does not get added.",
//       "severity": "Major",
//       "status": "Open",
//       "id": 4
//     }
//   ]};
// const issueReducer = createSlice({
//     name:'issue',
//     initialState,
//     reducers:{
//         initIssue(state,action){
//             state.issues = action.payload
//         },
//         addIssue(state,action){
//             action.payload.id=state.issues.length+1;
//             state.issues.push(action.payload)
//         },
//         updateIssue(state,action){
//             state.issues = state.issues.map(issue => issue.id === action.payload.id ? action.payload : issue )
//         },
//         deleteIssue(state,action){
//             state.issues = state.issues.filter(issue => issue.id !== action.payload)
//         }
//     }
// });

export const getIssues  = createAsyncThunk(
    'issue/getIssues',
    async () => {
        return url.get('/issues').then(res => {

          return res.data;
        });
    }
);

export const addIssue  = createAsyncThunk(
    'issue/addIssue',
    async (issue) => {
        return url.post(`/issues/`,issue).then(res => {
          return res.data;
        });
    }
);

export const updateIssue  = createAsyncThunk(
    'issue/updateIssue',
    async ({issue}) => {
        console.log(issue);
        return url.patch(`/issues/${issue.id}`,issue).then(res => {
          console.log(issue+'reached in');
          return res.data;
        });
    }
);

export const deleteIssue  = createAsyncThunk(
    'issue/deleteIssue',
    async (id) => {
        console.log('in reducer'+id);
        return url.delete(`/issues/${id}`).then(res => {
          console.log(id+'reached in');
          return res.data;
        }).catch(err => console.log(err));
    }
);
// const issueSlice = createSlice({
//     name:'issue',
//     initialState,
//     extraReducers:{
//         [getIssues.pending]: (state) => {
//             state.status='loading';
//         },
//         [getIssues.fulfilled]:(state,action) => {
//             state.issues = action.payload;
//             state.status = 'success';
//         },
//         [getIssues.rejected]: (state)=>{
//             state.status='failed'
//         },
//         [addIssue.pending]: (state) => {
//             state.status='loading';
//         },
//         [addIssue.fulfilled]:(state,action) => {
//             action.payload.id=state.issues.length+1;
//             state.issues.push(action.payload)
//             state.status = 'success';
//         },
//         [addIssue.rejected]: (state)=>{
//             state.status='failed'
//         },
//         [updateIssue.pending]: (state) => {
//             state.status='loading';
//         },
//         [updateIssue.fulfilled]:(state,action) => {
//             state.issues = state.issues.map(issue => issue.id === action.payload.id ? action.payload : issue )
//             state.status = 'success';
//         },
//         [updateIssue.rejected]: (state)=>{
//             state.status='failed'
//         },
//         [deleteIssue.pending]: (state) => {
//             state.status='loading';
//         },
//         [deleteIssue.fulfilled]:(state,action) => {
//             const newState = state.issues.filter(issue => issue.id !== action.payload);
//             state.issues = newState;
//             state.status = 'success';
//             return state;
//         },
//         [deleteIssue.rejected]: (state)=>{
//             state.status='failed'
//         },
//     }
// });

const issueSlice = createSlice({
    name:'issue',
    initialState,
    extraReducers:(builder) =>{
         builder.addCase(getIssues.pending,(state) => {
            state.status='loading';
        }).addCase(getIssues.fulfilled,(state,action)=>{
            state.issues = action.payload;
            state.status = 'success';
        }).addCase(getIssues.rejected,(state)=>{
            state.status = 'failed';
        })
        builder.addCase(addIssue.pending,(state)=>{
            state.status='loading'
        }).addCase(addIssue.fulfilled,(state,action)=>{
            action.payload.id=state.issues.length+1;
            state.issues.push(action.payload)
            state.status = 'success';
        }).addCase(addIssue.rejected,(state)=>{
            state.status='failed'
        })

        builder.addCase(updateIssue.pending,(state)=>{
            state.status='loading'
        }).addCase(updateIssue.fulfilled,(state,action)=>{
            state.issues = state.issues.map(issue => issue.id === action.payload.id ? action.payload : issue )
            state.status = 'success';
        }).addCase(updateIssue.rejected,(state)=>{
            state.status='failed'
        })

        builder.addCase(deleteIssue.pending,(state)=>{
            state.status='loading'
        }).addCase(deleteIssue.fulfilled,(state,action)=>{
            const newState = state.issues.filter(issue => issue.id !== action.payload);
            state.issues = newState;
            state.status = 'success';
        }).addCase(deleteIssue.rejected,(state)=>{
            state.status='failed'
        })
    }
});


export default issueSlice.reducer;
// export default issueReducer.reducer;
// export const issueActions =  issueReducer.actions;