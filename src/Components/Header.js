import React from 'react';
import {Link } from 'react-router-dom';



import { useDispatch,useSelector } from 'react-redux';
import { userActions } from '../Redux/Reducer/userReducer';

const Header = (props) => {
  
  const  dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.authenticatedUser);

  const logoutHandler = () => {
      dispatch(userActions.logoutUser());
  }
    return (      
        <>
        <Link to='/About'>About</Link>
        <Link to='/'>Issues</Link>
        { Object.keys(currentUser).length === 0 &&
            <React.Fragment>
            <Link to='/Register'>Register</Link>
            <Link to='/Login'>Login</Link>
            </React.Fragment> 
        }
        
        

        { Object.keys(currentUser).length !== 0 &&
            <React.Fragment>
            <Link to='/AddIssue'>Add Issue</Link>
            <span>Logged in as {`${currentUser.firstName} ${currentUser.lastName}`}</span>
            <button onClick={logoutHandler}>Logout</button>
            </React.Fragment>
        }
        </>
    );
}

export default Header;