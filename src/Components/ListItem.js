import React from 'react';
import {Link} from 'react-router-dom';

import {useSelector } from 'react-redux';

const ListItem = (props) => {
    const auth = useSelector(state => state.user.isAuthenticated);
    
    const deleteHandler = (id) => {
        console.log('delete event'+id);
        props.onDelete({id:id});
    }
    
    return(
        <>
        <Link to={`/Issue/${props.id}`}>
        <div className=""><strong>ID:</strong>{props.id}</div>
        {props.filter.includes('description') && <div className=""><strong>Description:</strong>{props.description}</div>}
        {props.filter.includes('severity') && <div className=""><strong>Severity:</strong>{props.severity}</div>}
        {props.filter.includes('status') && <div className=""><strong>Status:</strong>{props.status}</div>}
        {props.filter.includes('createdDate') && <div className=""><strong>Created Date:</strong>{props.createdDate}</div>}
        {props.filter.includes('resolvedDate') && <div className=""><strong>Resolved Date:</strong>{props.resolvedDate}</div>}
        </Link>
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