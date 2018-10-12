import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "josh", age: 27 },
            {name: "dylan", age: 22 },
            {name: "TS", age: 30 }
        ]
    }

    render() {
        return ( 
        <div className = "App">
             <header className = "App-header">
            <img src={ logo }className = "App-logo" alt = "logo"/>
            <p>Maybe a redbull swag shop? or symphony on the potomac? maybe a place to make smart contracts with your friends for making bets?</p>
            </header>
            <button>Switch Name!</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>And I am an alter ego!</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> 
        );
    }
}

export default App;