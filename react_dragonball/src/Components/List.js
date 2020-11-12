import React from "react";

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
export default List;