import React, { Component } from 'react'
import ButtonLink from '../ResumeComponent/ButtonLink';


export default class Resume extends Component {  
    render() {
        //console.log(this.props)
        return (
            <>
                <div className="container">
                    <h1 className="my-3 text-center" >Resume Maker</h1>
                    <div className="row">
                        <div className="col-12 text-center">
                            <ButtonLink updateState={this.props.updateState}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
