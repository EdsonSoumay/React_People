import React from 'react';
import './App.css';
import {human} from "./utils/human";


const sortByPower = (a, b) => {
    return b.power - a.power;
}


const List = props => {
    return (
        <>
            <h1>React People!</h1>
            <ul className ="list">
                    {props.data.sort(sortByPower).map((person) => (
                        <li key={person.name} className ="list-item">
                        <div className = "list-item-image-container">
                            <img src={person.thumbnail} />
                        </div>
                        <span className = "list-item-name">
                            {person.name} ( Power:{ ' '}
                            <span className="list-item-power">{person.power}</span> )
                        </span>
                        </li>    
                ))}
           </ul>
        </>
    );
}


const App =() =>  {
    return(
        <div className="App">
            <List data ={human} />
        </div>
    );
}


export default App;
