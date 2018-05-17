import './App.css'
import logo from './Logo.png'
import Widget from './components/Widget.js';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom'



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
                <li className="menu-main-item">Workspaces <div className="addWorkspace ml-auto">+</div></li>

                {/* We need to loop data and populate this format with course name in them */}
                <li><NavLink to="/course-1" className="menu-item mih" activeClassName="activeMenuItem">Course 1</NavLink></li>
                <li><NavLink to="/course-2" className="menu-item mih" activeClassName="activeMenuItem">Course 2</NavLink></li>
                <li><NavLink to="/course-3" className="menu-item mih" activeClassName="activeMenuItem">Course 3</NavLink></li>
                <li><NavLink to="/course-4" className="menu-item mih" activeClassName="activeMenuItem">Course 4</NavLink></li>

                {/* Lower portion of side menu */}
                <br></br>
                <div className="border"></div>
                <br></br>

                <li><NavLink to="/settings" className="menu-main-item mih" activeClassName="activeMenuItem">Settings</NavLink></li>
                <li><NavLink to="/help" className="menu-main-item mih" activeClassName="activeMenuItem">Help</NavLink></li>
            </ul>
        </nav>
            </Router>
        </div>
        );
    }
}

export default SideMenu;

