import React, { Component } from 'react';
import AddTimer from './addTimer.component';

export default class NewTimer extends Component {
    constructor() {
        super();
        this.state = {
            render: false,
            timers: []
        };
    }
    handleAddTimer = (timer) => {
        this.setState({
          ...this.state,
          timers: [...this.state.timers, timer]
        });
      }
    render() {
        if(this.state.render) {
             return (
                 <fieldset>
                     <AddTimer add={this.handleAddTimer} />
                    <button className="btn btn-red" onClick={this.handleNewTimer}>Retour</button>
                 </fieldset>
            );
        }
        return(
            <button className="btn btn-blue" onClick={this.handleNewTimer}>Ajouter chronomètre</button>
        )
    }

    handleNewTimer = () => {
        this.setState({
            render: !this.state.render,
        });
    }
}