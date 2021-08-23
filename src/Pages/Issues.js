import React from 'react';
import List from '../Components/List';
import { getIssues } from '../Redux/Actions/IssueActions';
const Issues = (props) => {
    
    return (
        <>
        <h1>Issues Page</h1>
        <h2>Issues List </h2>
        <List/>
        </>
    );
}

export default Issues;