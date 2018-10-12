import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: "josh", age: 27 },
            {name: "dylan", age: 22 },
            {name: "TS", age: 30 }
        ],

        someOtherState: "this could be literally anything?!",
        showPersons: false
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Josh", age: 27 },
                {name: event.target.value, age: 22 },
                {name: "T.S.", age: 30 }
            ]
        })
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style = {
            backgroundColor: "white",
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return ( 
        <div className = "App">
            <button 
                style={style}
                onClick={() => this.togglePersonsHandler() }>
                    Show/Hide Persons!
            </button>
            { 
                this.state.showPersons === true ? 
                <div>
                    <Person 
                        name={this.state.persons[0].name} 
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, "JoRsH")}/>
                    <Person 
                        name={this.state.persons[1].name} 
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, "JISH")}
                        changed={this.nameChangedHandler}>
                        And I am an alter ego!
                    </Person>
                    <Person 
                        name={this.state.persons[2].name} 
                        age={this.state.persons[2].age}
                        click={this.switchNameHandler.bind(this, "yeshua")}/>
                </div> : null
            }
        </div> 
        );
    }
}

export default App;