import './App.css'
import logo from './Logo.png'
import bkImg from './homepageGeisel.jpg'
import Widget from './Widget.js';
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

{/* Used for image styling in CSS */}
var backgroundImg = {
    backgroundImage: 'url(' + bkImg + ')'
};

export const Homepage = () => {
    return (
        <Router>
        <div className="container-fluid">
            <section>
            <div className="row">
                <div className="col-md-12">
                <div style={backgroundImg} className="hp-background">
                    <div className="centerWrapper">
                        <div>Welcome to CSE HUB</div>
                        <a href={`./login`}><button type="button" class="home-btn btn btn-primary">Login</button></a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
        </Router>
    );
};