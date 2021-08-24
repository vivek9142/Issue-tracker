import React from 'react';
import {BrowserRouter , Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import UpdateIssue from './Pages/UpdateIssue';
import About from './Pages/About';
import Issues from './Pages/Issues';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AddIssue from './Pages/AddIssue';
import NotFound from './Pages/NotFound';
// import './App.css';

import { useSelector } from 'react-redux';

function App() {
    const isAuth = useSelector(state => state.user.isAuthenticated);
    console.log(isAuth);
  return (
    <BrowserRouter>
    <div className="App">
        <Header/>

        <Switch>
        
            <Route path='/' exact component={Issues}/>

            {/* { isAuth && [ */}
                <Route path='/AddIssue' key='/AddIssue' exact component={AddIssue}/>
                {/* , */}
                <Route path='/update/:id' key='/updateIssue' exact component={UpdateIssue}/>
            {/* ]
            } */}
            
            <Route path='/About' component={About}/>
            <Route path='/Login' exact component={Login}/>
            <Route path='/Register' exact component={Register}/>
            <Route component={NotFound}/>
        </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
