import React from 'react';
import {Link} from 'react-router-dom';

import {useSelector } from 'react-redux';
import './ListItem.css';

const ListItem = (props) => {
    const auth = useSelector(state => state.user.isAuthenticated);
    
    const deleteHandler = (id) => {
        props.onDelete({id:id});
    }
    const changeHandler = (id,ev)=>{
        props.onSelect(id,ev.target.checked);
    }
    
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 ">
                
                <div className="card pb-2 issue-card--container">
                    {auth && <div className="form-check m-1">
                        <input type="checkbox" className="form-check-input" onChange={(ev)=>{changeHandler(props._id,ev)}}/>
                    </div>}
                    <Link className='issue-card--link' to={`/Issue/${props._id}`}>
                        <div>
                            <div className="card-body">
                                {props.filter.includes('description') && <h5 className="card-title">{props.description}</h5>}
                                {props.filter.includes('ID') && (<><strong>ID:</strong>{props._id.substr(0,10)+'...'}</>)}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item issue-card--span-container">
                                    {props.filter.includes('status') &&<div>Status<span className='issue-card--span'>{props.status}</span></div>}
                                    {props.filter.includes('severity') && <div>Severity<span className='issue-card--span'>{props.severity}</span></div>}
                                </li>
                            </ul>
                        </div>
                    </Link>

                        { auth && 
                        <React.Fragment>
                            <div className="card-body issue-card--button-container">
                                <Link className="btn btn-warning btn-sm me-3" to={`/update/${props._id}`}>Update</Link>
                                <button className="btn btn-danger btn-sm" onClick={()=> deleteHandler(props._id)}>Delete</button>
                            </div>
                        </React.Fragment>}
                    </div>
            </div>
        
        </>
    )
}

export default ListItem;