import './App.css'
import logo from './Logo.png'
import Widget from './components/Widget.js';
import React from 'react';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-nav mr-auto" href="/"><img id="Logo" src={logo}/></a>

                <div className="floatRight">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div className="settingsIconMenu"><i className="fas fa-cog"></i></div>
                <div>Google Photo <br></br>Account</div>
            </div>
        </nav>

    );
};

{/*
export const Widget = () => {
  return (<div className="Widget">widget1 test</div>);
}
*/}
export const Widget1 = (props) => {
    return (new Widget(props.name));
}