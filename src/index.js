import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import {Header, Widget1} from './Header';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import ButtonPanel from "./ButtonPanel";


ReactDOM.render(
<Router>
    <div>
        <Route exact path="/" component = {Login}/>
    </div>
</Router>, document.getElementById('bottom')
);


ReactDOM.render(<ButtonPanel />, document.getElementById('buttons'));




registerServiceWorker();
