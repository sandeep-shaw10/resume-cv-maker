import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume'

export default class Preview extends Component 
{
    render() 
    {
        //console.log(this.props);
        var prox = this.props.data;
        return (
            <>
            <Resume updateState={this.props.updateState} />
            <div className="container" id="resume">
                <div className="detail-preview">
                    {prox.personal["name"]}
                    
                </div>
            </div>
            </>
        )
    }
}
