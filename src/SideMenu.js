import './App.css'
import logo from './res/images/Logo.png'
import Widget from './Widget.js';
import {Header, Widget1} from './Header';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import {Settings} from "./Settings";
import {Help} from "./Help.js";
import 'firebase/database';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'
import {Homepage} from "./Homepage";

var courses = new Array();

function addWidget(param) {
    {/* This removes any widgets that may be from a different class */}
    ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));

    {/* Render the course widgets */}
    ReactDOM.render(<Widget1 name={param}></Widget1>, document.getElementById('bottom'));
}
export function buttons() {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            var userId = firebase.auth().currentUser.uid;
            var getData = firebase.database().ref('/users/' + userId + '/workspace');

            getData.once('value', function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.key;
                    courses.push(childData);
                })
                ReactDOM.render(<SideMenu />, document.getElementById('menu-side'));
            }, function(error) {
                // The callback failed.
                console.error(error);
            });
        }

    })
}


function openSettings() {
    {/* This removes any widgets that may be from a different class */}
    ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));

    {/* Render the settings page */}
    ReactDOM.render(<Settings/>, document.getElementById('bottom'));
}

function openHelp() {
    {/* This removes any widgets that may be from a different class */}
    ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));

    {/* Render the settings page */}
    ReactDOM.render(<Help/>, document.getElementById('bottom'));
}

export function logout(){
    firebase.auth().signOut().then(function() {
        ReactDOM.unmountComponentAtNode(document.getElementById('topNav'));
        ReactDOM.unmountComponentAtNode(document.getElementById('menu-side'));
        ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));
        ReactDOM.unmountComponentAtNode(document.getElementById('signin'));
        ReactDOM.unmountComponentAtNode(document.getElementById('homepage'));
        ReactDOM.render(<Homepage />,document.getElementById('homepage'));
    }).catch(function(error) {
        console.log(error);
    });
}

export class SideMenu extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <Router>
                    <nav className="menu-side">
                        <ul className="menu-side-list">
                            <li className="menu-main-item"><div className="menu-icons"><i className="fas fa-th-large"></i></div>Workspaces <div className="addWorkspace ml-auto" data-toggle="modal" data-target="#modal-addWebsite">+</div></li>

                            {/* Button trigger modal */}

                            {/* We need to loop data and populate this format with course name in them */}

                            {courses.map((courseTitle, arrayIndex) => {
                                return (
                                    <li onClick={addWidget.bind(this, courseTitle)}><NavLink to={"/dashboard/course/" + courseTitle} className="menu-item mih" activeClassName="activeMenuItem" >{courseTitle}</NavLink></li>
                                )
                            })}

                            {/* Lower portion of side menu */}
                            <br></br>
                            <br></br>
                            <div className="border"></div>
                            <br></br>

                            <li onClick={openSettings}><NavLink to="/dashboard/settings" className="menu-main-item mih" activeClassName="activeMenuItem"><div className="menu-icons"><i className="fas fa-cog"></i></div><span className="pad-left-settings">Settings</span></NavLink></li>
                            <li onClick={openHelp}><NavLink to="/dashboard/help" className="menu-main-item mih" activeClassName="activeMenuItem"><div className="menu-icons"><i className="fas fa-question"></i></div> <span className="pad-left-help">Help</span></NavLink></li>
                            <li onClick={logout}><NavLink to="/" className="menu-main-item mih" activeClassName="activeMenuItem"><div className="menu-icons"><i className="fas fa-sign-out-alt"></i></div>Sign out</NavLink></li>

                        </ul>
                    </nav>
                </Router>
            </div>

        );
    }
}

export default SideMenu;