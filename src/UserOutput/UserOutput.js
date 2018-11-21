import React from 'react';

const UserOutput = (props) =>{

    const style = {
        color: 'Purple',
        fontSize: '10vw',
        fontFamily: 'Impact',
        fontWeight: 'bold'
      };

    return(
        <div style={style}>
            <p>{props.username}</p>
        </div>  
    )
}

export default UserOutput