import React from 'react';

function Display(props) {
    return (
        <div data-testid="wrapper" className="display=wrapper">
            <p data-testid="display-field">Balls: {props.balls}</p>
            <p data-testid="display-field">Strikes: {props.strikes}</p>
        </div>
    );
}

export default Display;