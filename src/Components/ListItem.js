import React from 'react';
import {Link} from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';
import { issueActions } from '../Redux/Reducer/issueReducer';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.user.isAuthenticated);
    
    const deleteHandler = (id) => {
        dispatch(issueActions.deleteIssue(id));
    }
    return(
        <>
        <div className=""><strong>ID:</strong>{props.id}</div>
        <div className=""><strong>Sescription:</strong>{props.description}</div>
        <div className=""><strong>Severity:</strong>{props.severity}</div>
        <div className=""><strong>Status:</strong>{props.status}</div>
        
        { auth && 
            <React.Fragment>
            <Link to={`/update/${props.id}`}>Update</Link>
            <button onClick={()=> deleteHandler(props.id)}>Delete</button>
            </React.Fragment>
        }
        </>
    )
}

export default ListItem;