import React, { Component } from 'react'

export default class DetailRender extends Component 
{
    render() 
    {
        return (
            <>
                <div className="col-12 mb-3">
                    <div className="component bg-light rounded p-1">
                        <div className="wrap d-flex justify-content-between mb-0">
                            <h4> <b className="bold">{this.props.degree}</b>{", "+this.props.place}</h4>
                            <div className="lead">
                                <span>{this.props.from}</span> 
                                <span className={this.props.display}>{ (this.props.to === "")? "": "- "+this.props.to }</span>
                            </div>
                            <button className="btn btn-danger p-0 px-2 m-0" onClick={() => this.props.handleDelete(this.props.value)}>
                                    <i className="fa fa-trash"></i> 
                            </button>
                        </div>
                        <hr/>
                        <div className="about-text pl-4" dangerouslySetInnerHTML={{__html: this.props.about}} />
                    </div>
                </div>
            </>
        )
    }
}
