import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "josh", age: 27 },
            {name: "dylan", age: 22 },
            {name: "TS", age: 30 }
        ],

        someOtherState: "this could be literally anything?!"
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 27 },
                {name: "Dylan", age: 22 },
                {name: "T.S.", age: 30 }
            ]
        })
    }

    render() {
        return ( 
        <div className = "App">
            <button onClick={() => this.switchNameHandler("Joshua!!!")}>Switch Name!</button>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, "JoRsH")}/>
            <Person 
                name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, "JISH")}>
                    And I am an alter ego!
            </Person>
            <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                click={this.switchNameHandler.bind(this, "yeshua")}/>
        </div> 
        );
    }
}

export default App;