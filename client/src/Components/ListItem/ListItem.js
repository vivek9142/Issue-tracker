import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import {useSelector } from 'react-redux';
import './ListItem.css';

const ListItem = (props) => {
    const auth = useSelector(state => state.user.isAuthenticated);
    
    const deleteHandler = (id) => {
        props.onDelete({id:id});
    }
    const SelectMultipleHandler = (id,ev)=>{
        props.onSelect(id,ev.target.checked);
    }

    const updateHandler = (id) => {
        if(auth){
            props.history.push(`/update/${id}`); 
        }
        else alert('You need to Login to perform this Operation!')
    }

    const alertHandler = () => {
        if(!auth) alert('You need to Login to perform this Operation!')
    }
     
    return(
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 ">
                
                <div className="card pb-2 issue-card--container">
                     <div className="form-check m-1">
                        <input type="checkbox" className="form-check-input issue-select" onChange={(ev)=>{SelectMultipleHandler(props._id,ev)}}/>
                    </div>
                    <Link className='issue-card--link' to={ auth ? `/Issue/${props._id}` : {javascript:void(0)}} onClick={alertHandler} >
                        <div>
                            <div className="card-body">
                                {props.filter.includes('description') && <h5 className="card-title">{props.description}</h5>}
                                {props.filter.includes('ID') && (<><strong>ID:</strong>{props._id}</>)}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item issue-card--span-container">
                                    {props.filter.includes('status') &&<div>Status<span className='issue-card--span'>{props.status}</span></div>}
                                    {props.filter.includes('severity') && <div>Severity<span className='issue-card--span'>{props.severity}</span></div>}
                                </li>
                            </ul>
                        </div>
                    </Link>

                            <div className="card-body issue-card--button-container">
                                <button className="btn btn-warning btn-sm me-3" onClick={()=> updateHandler(props._id)}>Update</button>
                                <button className="btn btn-danger btn-sm" onClick={()=> deleteHandler(props._id)}>Delete</button>
                            </div>
                    </div>
            </div>
        
        </>
    )
}

export default withRouter(ListItem);