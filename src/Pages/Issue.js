import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { updateViews } from '../Redux/Actions/IssueActions';

const Issue = (props) => {
    const Issues = useSelector(state => state.issue.issues);
    const  dispatch = useDispatch();
    const specificIssue = Issues.find(issue => issue.id === parseInt(props.match.params.id));
    
    useEffect(() => {
        dispatch(updateViews(props.match.params.id))
    }, [dispatch]);

    return (
        <>
        <h1>Issues Page</h1>
        <h2>Issues List </h2>
        <div className=""><strong>ID:</strong>{specificIssue.id}</div>
        <div className=""><strong>Description:</strong>{specificIssue.description}</div>
        <div className=""><strong>Severity:</strong>{specificIssue.severity}</div>
        <div className=""><strong>Status:</strong>{specificIssue.status}</div>
        </>
    );
}

export default Issue;