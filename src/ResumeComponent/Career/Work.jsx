import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';


export default class Work extends Component {
    render() {
        return (
            <>
                <Resume updateState={this.props.updateState} />
                Work
            </>
        )
    }
}
