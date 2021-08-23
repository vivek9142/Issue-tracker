import { issueActions } from "../Reducer/issueReducer";
import axios from 'axios';
// import thunk from 'redux-thunk';

const url = axios.create({baseURL:'http://localhost:3001'});

export const getIssues = () =>{
    return (dispatch) => {
        url.get('/issues').then(res => {
            dispatch(issueActions.initIssue(res.data))
        });
    }
}
