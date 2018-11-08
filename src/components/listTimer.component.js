import React, { Component } from 'react';
import Timer from './timer.component';
import AddTimer from './addTimer.component';
import MOCK_TIMERS  from './mocks/chronos.mock';

export default class ListTimer extends React.Component {
    constructor() {
        super();
        this.state = {
            timers: []
        }
        console.log(timer);
    }
    componentDidMount() {
        this.setState({ 
            timers: MOCK_TIMERS
         });
      }
    
      handleAddTimer = (timer) => {
        this.setState({
          ...this.state,
          timers: [...this.state.timers, timer]
        });
      }
    render() {
        return(
            <div>
                <ul>
                    <Timer />
                </ul>
                <div>
                    <AddTimer add={this.handleAddTimer}/>
                    <Timer timers={this.state.timers} />
                </div>
            </div>
            
        )
    }
}