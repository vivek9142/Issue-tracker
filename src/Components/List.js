import React,{useEffect} from 'react';
import ListItem from './ListItem';

import { getIssues,deleteIssue } from '../Redux/Reducer/issueReducer';
import { useDispatch,useSelector } from 'react-redux';

const List = () => {  
    const dispatch = useDispatch();
    
        useEffect(() => {
            dispatch(getIssues()); 
        },[dispatch]);
        
        const delHandler = (id) => {
            dispatch(deleteIssue(id));
        }

        
        const realIssues = useSelector(state => state.issue);
        console.log(realIssues);
        const ListContents = realIssues.issues.map(issue => (
            <ListItem key={issue.id} {...issue} onDelete={delHandler}/>
        ));
        
    return(
        <>
        <h1>List</h1>
        {ListContents}
        </>
    )
}

export default List;