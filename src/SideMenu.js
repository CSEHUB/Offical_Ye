import './App.css'
import logo from './Logo.png'
import Widget from './Widget.js';
import {Header, Widget1} from './Header';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'

var courses = ['CSE100', 'CSE110', 'CSE20', 'CSE30'];

function addWidget(param) {
    {/* This removes any widgets that may be from a different class */}
    ReactDOM.unmountComponentAtNode(document.getElementById('bottom'));

    {/* Render the course widgets */}
    ReactDOM.render(<Widget1 name={param}></Widget1>, document.getElementById('bottom'));
}

class SideMenu extends Component {
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
                                    <li onClick={addWidget.bind(this, courseTitle)}><NavLink to={courseTitle} className="menu-item mih" activeClassName="activeMenuItem" >{courseTitle}</NavLink></li>
                                )
                            })}

                            {/* Lower portion of side menu */}
                            <br></br>
                            <br></br>
                            <div className="border"></div>
                            <br></br>

                            <li><NavLink to="/app/settings" className="menu-main-item mih" activeClassName="activeMenuItem"><div className="menu-icons"><i className="fas fa-cog"></i></div>Settings</NavLink></li>
                            <li><NavLink to="/help" className="menu-main-item mih" activeClassName="activeMenuItem"><div className="menu-icons"><i className="fas fa-question"></i></div>Help</NavLink></li>
                        </ul>
                    </nav>
                </Router>
            </div>

        );
    }
}

export default SideMenu;

