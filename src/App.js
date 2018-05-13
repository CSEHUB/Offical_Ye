import './App.css'
import Widget from './components/Widget.js';
import React from 'react';

export const App = () => {
    return (<div className="App">CSEHUB</div>);
};

{/*
export const Widget = () => {
  return (<div className="Widget">widget1 test</div>);
}
*/}
export const Widget1 = (props) => {
    return (new Widget(props.name));
}