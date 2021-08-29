import React,{useState} from 'react';
import ListItem from './ListItem';
import FilterControl from './FilterControl';

import { deleteIssue } from '../Redux/Actions/IssueActions';
import { useDispatch,useSelector } from 'react-redux';
import {issueActions} from '../Redux/Reducer/issueReducer';

const List = (props) => {  
    const dispatch = useDispatch();
        
        const delHandler = (id) => {
            dispatch(deleteIssue(id));
        }
        const Issues = useSelector(state => state.issue.issues);
        const filter = useSelector(state => state.issue.filter);
        const [search,setSearch] = useState('');

        const filteredIssues = Issues.filter(issue => issue.description.toLowerCase().includes(search.toLowerCase()));
        
        let ListContents = filteredIssues.map(issue => (
            <ListItem key={issue.id} {...issue} filter={filter} onDelete={delHandler}/>
        ));
        const handleSearch = (event) => {
            setSearch(event.target.value)
        }
        const handleFilterChange = (name,val) => {
            dispatch(issueActions.changeFilter({name,val}));
        }
    return(
        <>
        <input type="text" name='search' placeholder='Search description' onChange={handleSearch} />
        <h1>List</h1>
        <div className="filter">
            <h3>Filter out the Details you Need</h3>
            <p>You Control the UI. You can keep the details you need in this page. 
                We have included every little details. Try to uncheck some of below details.
                See the difference with one click.
            </p>
            <div className="filter--filter-control">
                <FilterControl name='description' label='Description' handleChange={handleFilterChange}/>
                <FilterControl name='severity' label='Severity' handleChange={handleFilterChange}/>
                <FilterControl name='status' label='Status' handleChange={handleFilterChange}/>
                <FilterControl name='createdDate' label='Created Date' handleChange={handleFilterChange}/>
                <FilterControl name='resolvedDate' label='Resolved Date' handleChange={handleFilterChange}/>
            </div>
        </div>
        {ListContents}
        </>
    )
}

export default List;