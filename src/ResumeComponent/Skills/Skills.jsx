import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';

export default class Skills extends Component {
    render() {
        //alert("Details Rendered");
        return (
            <>
                <Resume data={this.props}/>
            </>
        )
    }
}
