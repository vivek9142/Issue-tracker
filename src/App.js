import React from 'react';
import {BrowserRouter , Switch, Route,Redirect,Link } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import './App.css';

const Header = React.lazy(()=> import('./Components/Header/Header'));
const UpdateIssue = React.lazy(()=> import('./Pages/UpdateIssue/UpdateIssue'));
const About = React.lazy(()=> import('./Pages/About/About'));
const Issues = React.lazy(()=> import('./Pages/Issues/Issues'));
const Login = React.lazy(()=> import('./Pages/Login/Login'));
const Register = React.lazy(()=> import('./Pages/Register/Register'));
const AddIssue = React.lazy(()=> import('./Pages/AddIssue/AddIssue'));
const NotFound = React.lazy(()=> import('./Pages/NotFound/NotFound'));
const Issue = React.lazy(()=> import('./Pages/Issue/Issue'));
const TopViewedIssues = React.lazy(()=> import('./Pages/TopViewedIssues/TopViewedIssues'));



const App = () =>  {
  const dispatch = useDispatch();

    const isAuth = useSelector(state => state.user.isAuthenticated);

  return (
    <BrowserRouter>
    <div className="App">
      <React.Suspense fallback={<p>Loading</p>}>
        <Header/>

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
        </React.Suspense>

        
    </div>
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
      <Link className="footer-brand navbar-brand" to="/">Issue Tracker</Link>
      </div>
    </footer>
    </BrowserRouter>
  );
}

export default App;
