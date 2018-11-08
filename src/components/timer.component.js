import React, { Component } from 'react';

export default class Timer extends React.Component {

    render() {
        let showTimers = this.props.timers.map((chrono) => (
            <li key={chrono.id} className="no-puce">
                <fieldset>
                    <div><h2>{chrono.title}</h2></div>
                    <div>{chrono.description}</div>
                </fieldset>
            </li>                 
         ));
         return(
             <ul>
                 {showTimers}
             </ul>
         )
    }

}