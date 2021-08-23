import React from 'react';
import ListItem from './ListItem';

import { useSelector } from 'react-redux';

const List = () => {        
        const realIssues = useSelector(state => state.issue.issues);
        
        const ListContents = realIssues.map(issue => (
            <ListItem key={issue.id} {...issue}/>
        ));
        
    return(
        <>
        <h1>List</h1>
        {ListContents}
        </>
    )
}

export default List;