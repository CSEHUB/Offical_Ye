import './App.css'
import logo from './Logo.png'
import bkImg from './homepageGeisel.jpg'
import dashImg from './dashboard-sample.png'
import teamImg from './teamPhoto.jpg'
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

var teamBackgroundImg = {
    backgroundImage: 'url(' + teamImg + ')'
};

var noShow = {
    display:'none'
};

export const Homepage = () => {
    return (
        <Router>
            <div>
            <main role="main">
                <div style={backgroundImg} className="jumbotron hp-background bk-fixed">
                    <div className="container">
                        <h1 className="display-3">Welcome to CSE HUB!</h1>
                        <p>Created for UCSD CSE Students, by fellow tritons. With the rigorous CSE coursework, CSE HUB makes your life as a CSE student easier by
                        consolidating all of your class websites into one place.</p>
                        <p><a className="btn btn-primary btn-lg" href="./login" role="button">Login</a></p>
                    </div>
                </div>

                <div className="container">
                    <div className="row pt65">
                        <div className="col-md-12 text-center">
                            <h2>Get things done, faster.</h2>
                        </div>
                    </div>
                </div>




                    <div className="container">
                        <div className="row pt45">
                            <div className="col-md-12 text-center">
                                <img id="dashboardEx" className="homedashImg" style={noShow} src={dashImg}/>
                            </div>
                            <div className="col-md-10 text-center offset-md-1">
                                <p className="pt45">With CSE HUB, all your coursework is at your fingertips. You can
                                    create page layouts for all your courses
                                    (which we call workspaces) and then add numerous widgets to each course.</p>

                                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more (YouTube)</a></p>
                            </div>
                        </div>
                    </div>



                <div style={teamBackgroundImg} className="jumbotron hp-background mt65">
                    <div className="container">
                        <h3 className="display-3">Meet the team</h3>
                    </div>
                </div>





                <div className="container">
                    <div className="row text-center pt20">
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>Project Manager</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>UI Interface Specialist</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>Database Specialist</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>Software Analyst</h4>
                        </div>
                    </div>

                    <div className="row text-center pt45">
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>UI Interface Specialist</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>UI Interface Specialist</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>UI Interface Specialist</h4>
                        </div>
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>UI Interface Specialist</h4>
                        </div>
                    </div>

                </div>

                <div className="b-space"></div>

                <div className="container">
                    <div className="row pt45 text-center">
                        <div className="col-md-12">
                            <h2>Built with <span className="heartLogo"><i className="fas fa-heart"></i></span></h2>
                            <p className="pt20">For the Spring 2018 quarter with Gary Gillespie, CSE HUB is a software engineering project for
                                CSE110 built with the following technologies/frameworks: </p>
                            <p>(((((TODO: place logos for all technologies below)))))</p>
                        </div>
                    </div>
                </div>






            </main>

            <footer className="container mt65">
                <p>&copy; CSE HUB 2018</p>
            </footer>
            </div>

        </Router>

    );
};