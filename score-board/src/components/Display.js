import React from 'react';

function Display(props) {
    return (
        <div className="display=wrapper">
            <p>Balls: {props.balls}</p>
            <p>Strikes: {props.strikes}</p>
        </div>
    );
}

export default Display;