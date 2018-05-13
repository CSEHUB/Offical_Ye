import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import {Header, Widget1} from './Header';
import {SideMenu} from "./SideMenu";
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import firebaseui from "firebaseui";

var courses = ['CSE100', 'CSE110', 'CSE20', 'CSE30'];

function addWidget(param) {
    {/* This removes any widgets that may be from a different class */}
    ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));

    {/* Render the course widgets */}
    ReactDOM.render(<Widget1 name={param}></Widget1>, document.getElementById('bottom'));
}

class Home extends Component {
    constructor(props) {
        super(props);
        ReactDOM.render(<Header />, document.getElementById('top'));
        ReactDOM.render(<SideMenu />, document.getElementById('menu-side'));


    }
    render(){
        return(
        <Router>
            <div>
        <Route exact path="/home" render = {() => (
            <div className="container-fluid">
            <div className="row">
                {courses.map((courseTitle, arrayIndex) => {
                    return (
                        <button key={arrayIndex} className="Button"
                                onClick={addWidget.bind(this, courseTitle)}>{courseTitle}</button>
                    )
                })}
            </div>
        </div>
        )}/> </div>
        </Router>
        );
    }
}

export default Home;


