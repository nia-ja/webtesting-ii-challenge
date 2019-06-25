import React from 'react';

function Display(props) {
    return (
        <div data-testid="wrapper" className="display=wrapper">
            <p data-testid="balls">Balls: {props.balls}</p>
            <p data-testid="strikes">Strikes: {props.strikes}</p>
        </div>
    );
}

export default Display;