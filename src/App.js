import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return ( 
        <div className = "App">
             <header className = "App-header">
            <img src={ logo }className = "App-logo" alt = "logo"/>
            <p>Maybe a redbull swag shop? or symphony on the potomac? maybe a place to make smart contracts with your friends for making bets?</p>
            </header>
            <Person name="josh" age="27"/>
            <Person name="dylan" age="22"/>
            <Person name="TS" age="30"/>
        </div> 
        );
    }
}

export default App;