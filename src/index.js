import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import {Homepage} from './Homepage'
import {Header, Widget1} from './Header';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Dashboard from "./Dashboard";

{/* 1.) Initially Load homepage*/}
ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component = {Homepage}/>
    </div>
</Router>, document.getElementById('homepage')
);


{/* 2.) Load login screen*/}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/login" component = {Login}/>
        </div>
    </Router>, document.getElementById('signin')
);


{/* 3.) Load dashboard*/}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/dashboard" component = {Dashboard}/>
        </div>


    </Router>, document.getElementById('bottom')
);


registerServiceWorker();
