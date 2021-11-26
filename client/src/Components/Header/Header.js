import React from 'react';
import {Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { userActions } from '../../Redux/Reducer/userReducer';

import loginImg from '../../Assets/login.png';
import registerImg from '../../Assets/register.png';
import logoutImg from '../../Assets/logout.png';

import './header.css';

const Header = (props) => {
  
  const  dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.authenticatedUser);

  const logoutHandler = () => {
      dispatch(userActions.logoutUser());
  }
    return (  
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-sticky">
        <div className="container">
          <Link className="navbar-brand" to="/">Issue Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-items-container" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/About">About</Link>
              <Link className="nav-link" to="/Top-Viewed-Issues">Top Viewed Issues</Link>
            </div>
            
            <div className="auth d-flex">
              { Object.keys(currentUser).length === 0 &&
              <React.Fragment>
                  <Link className="btn btn-primary me-2" to="/Register">
                    <img className='nav--icon' src={registerImg} alt="register-icon" />
                    Register</Link>
                  <Link className="btn btn-success" to="/Login">
                      <img className='nav--icon' src={loginImg} alt="login-icon" />
                      Login</Link>
              </React.Fragment> 
              }

              { Object.keys(currentUser).length !== 0 &&
              <React.Fragment>
                  <span className='navbar-text me-5'>Logged in as {`${currentUser.firstName} ${currentUser.lastName}`}</span>
                  
                  <button className="btn btn-success" to="/Logout" onClick={logoutHandler}>
                      <img className='nav--icon' src={logoutImg} alt="logout-icon" />
                      Logout</button>
              </React.Fragment> 
              }
            </div>
          </div>
        </div>
      </nav>

        </>
    );
}

export default Header;