import React from 'react';
import './UserInput.css'

const UserInput = (props) =>{
    return(
        <input className="UserInput" type='text' onChange={props.changed} value={props.username}></input>
    )
}

export default UserInput