import React from 'react';
import NotFoundImg from '../../Assets/404.png'
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <>
        <div className="container">
            <div className="img-container">
            <img src={NotFoundImg} alt="" />
            <Link to='/'>Return to HomePage</Link>
            </div>

            <div className="notfoundcontainer">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">404 Not Found</h5>
                        <p className="card-text">The Page you are looking for doesn't exist</p>
                        <Link to='/' className="card-link">Return to HomePage</Link>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default NotFound;