import React from 'react';

function Dashboard(props) {
    return (
        <div data-testid="wrapper" className="dashboard-wrapper">
            <button data-testid="dashboard-button" onClick={props.strike}>Strike</button>
            <button data-testid="dashboard-button" onClick={props.ball}>Ball</button>
            <button data-testid="dashboard-button" onClick={props.foul}>Foul</button>
            <button data-testid="dashboard-button" onClick={props.hit}>Hit</button>
        
        </div>
    );
}

export default Dashboard;