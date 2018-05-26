import './App.css'
import logo from './res/images/Logo.png'
import bkImg from './res/images/homepageGeisel.jpg'
import dashImg from './res/images/dashboard-sample.png'
import teamImg from './res/images/teamPhoto.jpg'
import techLogosImg from './res/images/allLogos.png'
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
                        <p className="c-white">Created for UCSD CSE Students, by CSE Students. With the rigorous CSE coursework, CSE HUB makes your life as a CSE student easier by
                        consolidating all of your class websites into one place.</p>
                        <p className="form-inline">
                            <div className="p10"><a className="home-btn" href="./login" role="button">Register</a></div>
                            <div className="p10"><a className="home-btn" href="./login" role="button">Login</a></div>
                        </p>
                    </div>
                </div>




                    <div className="container">
                        <div className="homedashImg-h">
                            <div className="dis-none" id="dashboardEx">
                            <div className="row pt65">
                                <div className="col-md-12 text-center">
                                    <h2>Get things done, faster.</h2>
                                </div>
                            </div>

                        <div className="row pt45">
                            <div className="col-md-12 text-center">
                                <img className="homedashImg" src={dashImg}/>
                            </div>
                            <div className="col-md-10 text-center offset-md-1">
                                <p className="pt45">With CSE HUB, all your coursework is at your fingertips. You can
                                    create page layouts for all your courses
                                    (which we call workspaces) and then add numerous widgets to each course.</p>

                                <p className="pt30"><a className="home-btn" href="#" role="button" data-toggle="modal" data-target="#modal-youtubeTutorial">Learn more</a></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>



                <div style={teamBackgroundImg} className="jumbotron hp-background mt65">
                    <div className="container text-center">
                        <h3 className="display-3">Meet team HUB</h3>
                    </div>
                </div>





                <div className="container">

                    <div className="row pt30 text-center">
                        <div className="col-md-12">
                            <h2><u>H</u>olistically <u>U</u>nified <u>B</u>oys</h2>
                        </div>
                    </div>

                    <div className="row text-center pt20">
                        <div className="col-md-3">
                            <img className="profilePhoto" src={bkImg}/>
                            <h4>Lucas Nathan</h4>
                            <h5>Project Manager</h5>
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
                            <h4>Professor</h4>
                        </div>

                    </div>

                </div>

                <div className="b-space pt65"></div>

                <div className="container">
                    <div className="row pt65 text-center">
                        <div className="col-md-12">
                            <h2>Built with <span className="heartLogo"><i className="fas fa-heart"></i></span></h2>
                            <p className="pt20">For the Spring 2018 quarter with Gary Gillespie, CSE HUB is a software engineering project for
                                CSE110 built with the following technologies/frameworks: </p>

                        </div>
                    </div>

                    <div className="row pt20 text-center">
                        <div className="col-md-12">
                            <img src={techLogosImg}/>
                        </div>
                    </div>
                </div>




            </main>

            <footer className="container mt65">
                <p>&copy; CSE HUB 2018</p>
            </footer>






                <div className="modal fade" id="modal-youtubeTutorial" tabIndex="-1" role="dialog"
                     aria-labelledby="youtubeTutorialModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">

                            <div className="modal-body">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>

                            </div>

                        </div>
                    </div>
                </div>












            </div>

        </Router>

    );
};
