import React from 'react';
import {Link} from 'react-router-dom';
import List from '../../Components/List/List';

import './Issues.css';

const Issues = (props) => {
    
    return (
        <>
        <div className="container mt-4">
            <div className="row">
                    
                <div className="col-md-12">
                    <div className="card bg-warning  mb-3">
                            <h1 className="card-header">
                                Issues Tracker
                            </h1>
                        <div className="card-body">
                            <h5 className="card-title">Welcome to Issue Tracker React Application</h5>
                            <p className="card-text">Hope you enjoy the App! To Know more about the Application.</p>
                            <Link to='/About' className='btn btn-danger'>Click Here</Link>
                        </div>
                    </div>

                </div>
            </div>
        
            <List/>
        </div>
        
        </>
    );
}

export default Issues;