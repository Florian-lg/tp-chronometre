import React, { Component } from 'react';

export default class AddTimer extends React.Component {

    render() {
        return(
            <div>
                <fieldset>
                    <label htmlFor="tn">Nom du chronomètre</label>
                    <p><input type="text" ref="timerName" id="tn" placeholder="Nom du chronomètre..."/></p>
                    <label htmlFor="td">Description du chronomètre</label>
                    <p><input type="text" ref="timerDescription" id="td" placeholder="Description du chronomètre..." /></p>
                    <button type="submit" className="ui blue button" onClick={this.handleClick}>Valider</button>
                </fieldset>
            </div>
        )
    }
    handleClick = () => {

        let values = {
            title: this.refs.timerName.value,
            description: this.refs.timerDescription.value
        };
        //console.log(values);
        if(!values) return;
    
        this.props.add(values);
       // this.refs.elementInput.value = '';
    }
}