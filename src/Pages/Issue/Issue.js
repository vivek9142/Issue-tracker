import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateViews } from '../../Redux/Actions/IssueActions';
import {Link} from 'react-router-dom';
import { deleteIssue } from '../../Redux/Actions/IssueActions';
import './Issue.css';

const Issue = (props) => {
    const Issue = useSelector(state => state.issue.issues.find(i => i._id === props.match.params.id));
    const  dispatch = useDispatch();
    const auth = useSelector(state => state.user.isAuthenticated);
    useEffect(() => {
        return dispatch(updateViews(props.match.params.id))
    }, []);

    const deleteHandler = (id) => {
        dispatch(deleteIssue({id}));
        props.history.push('/');
    }
    return (
        <>
        <div className="container issue-container mt-5">
            <h3 className='issue-container--heading'>Issue Details</h3>
        <div className="card text-center mt-3">
            <div className="card-header">
                ID : {Issue._id}
            </div>
            <div className="card-body">
                <h5 className="card-title">{Issue.description}</h5>
                <li className="list-group-item issue-card--span-container">
                    <span>Status : <span className='issue-card--span'>{Issue.status}</span></span>
                    <span>Severity : <span className='issue-card--span'>{Issue.severity}</span></span>
                </li>
                <li className="list-group-item issue-card--span-container">
                    <span>Created Date : <span className='issue-card--span'>{Issue.createdDate}</span></span>
                    <span>Resolved Date : <span className='issue-card--span'>{Issue.resolvedDate}</span></span>
                </li>
                { auth && 
                        <React.Fragment>
                            <div className="card-body issue-card--button-container">
                                <Link className="btn btn-warning btn-sm me-3" to={`/update/${Issue._id}`}>Update</Link>
                                <button className="btn btn-danger btn-sm" onClick={()=> deleteHandler(Issue._id)}>Delete</button>
                            </div>
                        </React.Fragment>}
            </div>
            <div className="card-footer text-muted">
            </div>
        </div>
        </div>
        
        </>
    );
}

export default Issue;