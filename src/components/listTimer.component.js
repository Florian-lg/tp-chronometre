import React, { Component } from 'react';
import Timer from './timer.component';
import NewTimer from './newTimer.component';
import MOCK_TIMERS  from '../mocks/chronos.mock';

export default class ListTimer extends Component {
    constructor() {
        super();
        this.state = {
            timers: []
        }
    }
    componentDidMount() {
        this.setState({ 
            timers: MOCK_TIMERS
         });
      }
    
    render() {
        return(
            <div>
                <div>
                    <Timer timers={this.state.timers} />
                    <NewTimer />
                </div>
            </div>
            
        )
    }
}