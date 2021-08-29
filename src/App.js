import React from 'react';
import {BrowserRouter , Switch, Route,Redirect,Link } from 'react-router-dom';

import Header from './Components/Header';
import UpdateIssue from './Pages/UpdateIssue';
import About from './Pages/About';
import Issues from './Pages/Issues';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddIssue from './Pages/AddIssue';
import NotFound from './Pages/NotFound';
import Issue from './Pages/Issue';
import TopViewedIssues from './Pages/TopViewedIssues';
// import './App.css';

import { useSelector,useDispatch } from 'react-redux';
import {getIssues} from './Redux/Actions/IssueActions';

function App() {
  const dispatch = useDispatch();
  dispatch(getIssues()); 

    const isAuth = useSelector(state => state.user.isAuthenticated);

  return (
    <BrowserRouter>
    <div className="App">
        <Header/>
        <Link to='/Top-Viewed-Issues'>TopViewedIssues</Link>
        <Switch>
        
            <Route path='/' exact component={Issues}/>

            { isAuth && [
                <Route path='/AddIssue' key='/AddIssue' exact component={AddIssue}/>
                ,
                <Route path='/update/:id' key='/updateIssue' exact component={UpdateIssue}/>
            ]}
            
            <Route path='/Issue/:id' exact component={Issue}/>
            <Route path='/About' component={About}/>
            <Route path='/Login' exact >
                {isAuth ? <Redirect to='/'/> : <Login/>}
            </Route>
            <Route path='/Register' >
                {isAuth ? <Redirect to='/'/> : <Register/>}
            </Route>
            <Route path='/Top-Viewed-Issues' component={TopViewedIssues}/>
            <Route component={NotFound}/>
        </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
