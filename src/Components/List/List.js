import React,{useState,useEffect} from 'react';
import ListItem from '../ListItem/ListItem';
import FilterControl from '../FilterControl/FilterControl';

import { deleteIssue } from '../../Redux/Actions/IssueActions';
import { deleteMultipleIssues } from '../../Redux/Actions/IssueActions';
import { useDispatch,useSelector } from 'react-redux';
import {issueActions} from '../../Redux/Reducer/issueReducer';
import {getIssues} from '../../Redux/Actions/IssueActions';

import {Link} from 'react-router-dom';
import './List.css';

const List = (props) => {  
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getIssues());
    }, []);
    
        const multiDelArr = useSelector(state => state.issue.multiDelId);
        const delHandler = (id) => {
            dispatch(deleteIssue(id)).then(()=>{
                
            });
        }
        const auth = useSelector(state => state.user.isAuthenticated);
        const Issues = useSelector(state => state.issue.issues);
        const filter = useSelector(state => state.issue.filter);
        const [search,setSearch] = useState('');

        const filteredIssues = Issues.filter(issue => issue.description.toLowerCase().includes(search.toLowerCase()));

        const deleteMultiple =(id,isChecked)=>{
            dispatch(issueActions.multipleSelectforDelete({id,isChecked}))
        }

        const deleteAction = ()=> {
            dispatch(deleteMultipleIssues({multiDelId:multiDelArr}))
        }

        let ListContents = filteredIssues.map(issue => (
            <ListItem key={Math.ceil(Math.random()*1000)*Math.ceil(Math.random()*1000)} {...issue} filter={filter} onSelect={deleteMultiple} onDelete={delHandler}/>
        ));
        const handleSearch = (event) => {
            setSearch(event.target.value)
        }
        const handleFilterChange = (name,val) => {
            dispatch(issueActions.changeFilter({name,val}));
        }
        
    return(
        <>
        {multiDelArr.length>0 && <button className='btn btn-primary delMultiButton' onClick={deleteAction}>Delete</button>}
        <div className="row">
                <div className="col-md-6">
                    <div className="card bg-light  mb-3">
                            <h3 className="card-header">
                                Filter out!
                            </h3>
                        <div className="card-body">
                            <p className="card-text">
                                You Control the UI. You can keep the details you need in this page. 
                                We have included every little details. Try to uncheck some of below details.
                                See the difference with one click.
                            </p>

                            <div className="filter--filter-control m-1">
                                <FilterControl name='ID' filter={filter} label='ID' handleChange={handleFilterChange}/>
                                <FilterControl name='description' filter={filter} label='Description' handleChange={handleFilterChange}/>
                                <FilterControl name='severity' filter={filter} label='Severity' handleChange={handleFilterChange}/>
                                <FilterControl name='status' filter={filter} label='Status' handleChange={handleFilterChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                            <div className="card bg-light  mb-3">
                                    <h3 className="card-header">
                                        Search
                                    </h3>
                                <div className="card-body">
                                <p className="card-text">
                                    Search out the details you look in the Issue List below!
                                </p>
                                    <input type="text" className='search-bar'  name='search' placeholder='Search description' onChange={handleSearch} />
                                </div>
                            </div>
                </div>


            </div>
            
        

        <div className="row issues-list--heading-container mb-3">
            <div className="col-12">
                <h1 className="heading-primary Issues-heading">
                    Issues
                </h1>
                <hr className="my-4"></hr>
                <div className="Issues-description">
                    <p className="Issues-description--para">
                        Find below the Issues, We have covered so Far.
                    </p>
                </div>

                { auth && 
                        <React.Fragment>
                <div className="Issues-Add-Button">
                    <Link to='/AddIssue' className='btn btn-primary'>
                        Add Issue
                    </Link>
                </div>
                </React.Fragment>}
            </div>
            
        </div>
        <div className="row issues-list--container">
                {ListContents}
        </div>
        
        </>
    )
}

export default List;