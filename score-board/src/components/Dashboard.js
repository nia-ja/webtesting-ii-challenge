import React from 'react';

function Dashboard(props) {
    return (
        <div className="dashboard-wrapper">
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
        
        </div>
    );
}

export default Dashboard;