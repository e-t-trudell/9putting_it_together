// usestate holds persistent data in variables
import React, {useState} from 'react'

// in functional components use an arrow function that accepts an arguement, that must be called props
// access the values being passed down via props.keyName
const Snowboarder = (props) => {
    // [getter. method to update getter(setter)]=(input infomation from app default)
    // useState commonly holds a primitive or default value such as an integer, string, or boolean
    const[years, setYears] = useState(props.initialYears);


    // deconstructed: const{firstName, lastName}=props
    // enter deconstructed variables below without dot notation
    return(
        <div>
            <h1>{props.lastName}, {props.firstName} </h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.haircolor}</p>
            <p>Years Snowboarded? {years}</p>
            <button onClick = {(event) => setYears(years + 1)}>Add Year {props.firstName}</button>
            <button onClick = {(event) => setYears(years - 1)}>Remove Year {props.firstName}</button>
        </div>
    )
}
export default Snowboarder;