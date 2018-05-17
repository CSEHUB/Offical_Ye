import './App.css'
import logo from './Logo.png'
import googlePhoto from './testGooglePhoto.jpeg'
import Widget from './components/Widget.js';
import React from 'react';

export const Header = () => {
    return (
        <nav className="navBar">
            <div className="row">
                {/* Logo portion of Nav, to match sidebar */}
                <div className="col-md-2">
                    <div className="mr-auto form-inline topNavLogoSearchContainer">
                        <a className="navbar-nav" href="/"><img id="Logo" src={logo}/></a>
                    </div>
                </div>
                {/* Nav - Everything to right of logo */}
                <div className="col-md-10">
                    <div className="form-inline topNavLogoSearchContainer">
                        <form className="form-inline my-2 my-lg-0 topNavSearch mr-auto">
                            <input className="form-control mr-sm-2 topNavInput" type="search" placeholder="Search"
                               aria-label="Search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div className="floatRight form-inline">
                            <div className="IconMenu"><i className="far fa-bell"></i></div>
                            <div className="googlePhotoWrapper"><img class="googlePhoto" src={googlePhoto}/></div>
                        </div>
                    </div>
                </div>
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