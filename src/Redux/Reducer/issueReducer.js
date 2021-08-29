import { createSlice } from '@reduxjs/toolkit';
import {getIssues,addIssue,updateIssue,deleteIssue,updateViews} from '../Actions/IssueActions';
const initialState = {
    issues:[],
    status:null,
    filter:['description','severity','status','createdDate','resolvedDate']
};


const issueSlice = createSlice({
    name:'issue',
    initialState,
    reducers:{
        changeFilter:(state,action)=>{
            const val = action.payload.val;
            const name = action.payload.name;

            if(val === true && !state.filter.includes(name)) 
                state.filter.push(name);
            else if(val === false && state.filter.includes(name)) {
                state.filter = state.filter.filter(f => f !== name );
            }
        }
    },
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
            console.log(action.payload);
            state.status = 'success';
            return state;
        }).addCase(deleteIssue.rejected,(state)=>{
            state.status='failed'
        })
        builder.addCase(updateViews.pending,(state) => {
            state.status='loading';
        }).addCase(updateViews.fulfilled,(state,action)=>{
            state.issues = state.issues.map(issue => issue.id === action.payload.id ? action.payload : issue )
            state.status = 'success';
        }).addCase(updateViews.rejected,(state)=>{
            state.status = 'failed';
        })
    }
});


export default issueSlice.reducer;
// export default issueReducer.reducer;
export const issueActions =  issueSlice.actions;