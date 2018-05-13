import './App.css'
import logo from './Logo.png'
import Widget from './components/Widget.js';
import React from 'react';

export const SideMenu = () => {
    return (
        <div className="container-fluid">
        <nav className="menu-side">
            <ul className="menu-side-list">
                <li className="menu-item">Course 1</li>
                <li className="menu-item">Course 2</li>
                <li className="menu-item">Course 3</li>
                <li className="menu-item">Course 4</li>
            </ul>
        </nav>
        </div>
    );
};

