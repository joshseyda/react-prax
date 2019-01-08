import React, {PureComponent} from 'react';
import Person from  './Person/Person';


class Persons extends PureComponent  {
    constructor(props){
        super(props);
        console.log('[Persons.js] constructor', props);
    }

    componentWillMount(){
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount(){
        console.log('[Persons.js] componentDidMount');
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] componentWillRecieveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js] Render inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //     nextProps.changed !== this.props.changed ||
    //     nextProps.clicked !== this.props.clicked;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Render inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Render inside componentDidUpdate', nextProps, nextState);
    }

    render () {
        return this.props.persons.map((person, index) => {
        return <Person 
            key={person.id}
            click={() => this.props.clicked(index)} 
            name={person.name} 
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
} 

export default Persons; 