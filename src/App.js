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

   deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
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
    
    let persons = null;
        if (this.state.showPersons) {
            persons = (
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person 
                    click={() => this.deletePersonHandler(index)} 
                    name={person.name} 
                    age={person.age}/>
                })}
            </div>);
        }

        return ( 
        <div className = "App">
            <button 
                style={style}
                onClick={() => this.togglePersonsHandler() }>
                    Show/Hide Persons!
            </button> 
            {persons}
        </div> 
        );
    }
}

export default App;