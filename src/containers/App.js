import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
    constructor(props){
        super(props);
        console.log('[App.js] constructor', props);
    }

    componentWillMount(){
        console.log('[App.js] componentWillMount');
    }

    componentDidMount(){
        console.log('[App.js] componentDidMount');
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE App.js] Render inside shouldComponentUpdate', nextProps, nextState);
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Render inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState){
        console.log('[UPDATE App.js] Render inside componentDidUpdate', nextProps, nextState);
    }

    state = {
        persons: [
            {id: 'a01', name: "josh", age: 27 },
            {id: 'a02', name: "dylan", age: 22 },
            {id: 'a03', name: "TS", age: 30 }
        ],

        someOtherState: "this could be literally anything?!",
        showPersons: false,
        toggleClicked: 0
    }

   deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
   }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( (prevState, props) => {
            return {
                showPersons: !doesShow, 
                toggleClicked: prevState.toggleClicked+1
        }
        });
    }

    render() {
        console.log('[App.js] Render');
    let persons = null;
        if (this.state.showPersons) {
            persons = 
                <Persons 
                persons={this.state.persons} 
                clicked={this.deletePersonHandler} 
                changed={this.nameChangedHandler}/>;
        }
        return ( 
        <Aux>
        <button onClick={()=>{this.setState({showPersons: true})}}>SHOW ALWAYS</button>
            <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}/>
            {persons}
        </Aux> 
        );
    }
}

export default withClass(App, classes.App);