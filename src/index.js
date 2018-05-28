import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Homepage from './Homepage'
import {Header, Widget1} from './Header';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Dashboard from "./Dashboard";
import firebase from 'firebase';
import {FIREBASE_CONFIG} from './config';

var app = firebase.initializeApp(FIREBASE_CONFIG);

const myHomepage = () => {
  var user = null;
  return (<Homepage user={user}/>);
}
const myLogin = () => {
  var user = null;
  return (<Login user={user}/>);
}
const myDashboard = () => {
  var user = null;
  return (<Dashboard user={user}/>);
}

firebase.auth().onAuthStateChanged((user) => {
{/* 1.) Initially Load homepage*/}
ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" render = {myHomepage}/>
    </div>
</Router>, document.getElementById('homepage')
);


{/* 2.) Load login screen*/}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/login" component = {myLogin}/>
        </div>
    </Router>, document.getElementById('signin')
);


{/* 3.) Load dashboard*/}
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/dashboard" component = {myDashboard}/>
        </div>


    </Router>, document.getElementById('bottom')
);
});

registerServiceWorker();
