import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume'
import './Preview.css'

export default class Preview extends Component 
{
    render() 
    {
        //console.log(this.props);
        var prox = this.props.data;
        var image = prox.personal["image"];
        var imageClass = (image === '')?"col-12 personal-detail":"col-9 personal-detail";

        return (
            <>
            <Resume updateState={this.props.updateState} />

            <div className="container my-4 bg-light py-3" id="resume">

                <div className="detail-preview container">
                    <div className="row">
                        {image = (image === '')?'':
                        <div className="col-3">
                            <img className="img-fluid" src={image} alt="Re-upload if not displayed" />
                        </div>
                        }
                        <div className={imageClass}>
                            <h1>{prox.personal["name"]}</h1>
                            <h5>{prox.personal["occupation"]}</h5>
                            <hr className="m-1"/>
                            <p>{prox.personal["about"]}</p>
                        </div>
                    </div>
                </div>

                <div className="media-preview container">
                    <div className="row p-1 ">
                        <div className="col-3 d-flex "><i className="fa fa-mobile"></i> <p className="ml-1"> {prox.personal["phone"]} </p></div>
                        <div className="col-3 d-flex "><i className="fa fa-envelope"></i> <p className="ml-1"> {prox.personal["email"]} </p></div>
                        <div className="col-3 d-flex "><i className="fa fa-globe"></i> <p className="ml-1"> {prox.personal["website"]} </p> </div>
                        <div className="col-3 d-flex "><i className="fa fa-linkedin"></i> <p className="ml-1"> {prox.social["LinkedIn"]} </p> </div>
                    </div>
                </div>

                <div className="content-preview container  m-1">
                        <div className="row">
                            <div className="col-3 ">
                                <div className="wrap bg-info m-1">
                                    <p>Quick Info </p>
                                </div>
                            </div>
                            <div className="col-9 ">
                                <div className="wrap bg-info m-1">
                                    <p>Quick Info </p>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            </>
        )
    }
}
