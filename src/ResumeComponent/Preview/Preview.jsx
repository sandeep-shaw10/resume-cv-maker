import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume'

export default class Preview extends Component 
{
    render() 
    {
        var x = JSON.parse(localStorage.getItem('resume-data'))
        console.log(x)
        return (
            <>
            <Resume />
            <div className="container" id="resume">
                <div className="detail-preview">
                    {x.personal["name"]}
                </div>
            </div>
            </>
        )
    }
}
