import React, { Component } from 'react';

import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return ( 
            <Router>
            <div>
                

                <Route exact path="/" component={Login} />
                <Route  path="/login" component={Login} />
                <Route  path="/dashboard" component={Dashboard} />

            </div>
            </Router>
            
        )
    }
}