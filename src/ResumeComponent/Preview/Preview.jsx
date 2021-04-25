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
                                <div className="wrap-1 m-1">
                                    <div className="social-media pb-4">
                                        <h4>Social Media</h4>
                                        <p> <i className="fa fa-github"></i> Github</p>
                                        <p> <i className="fa fa-dribbble"></i> Dribbble</p>
                                        <p> <i className="fa fa-facebook"></i> Facebook</p>
                                        <p> <i className="fa fa-youtube"></i> Youtube</p>
                                        <p> <i className="fa fa-twitter"></i> Twitter</p>
                                    </div>

                                    <div className="skills pb-4">
                                        <h4>Technical Skills</h4>
                                        <p> Github</p>
                                        <p> Dribbble</p>
                                        <p> Facebook</p>
                                        <p> Youtube</p>
                                        <p> Twitter</p>
                                    </div>

                                    <div className="language pb-4">
                                        <h4>Languages</h4>
                                        <p>Github</p>
                                        <p>Dribbble</p>
                                        <p>Facebook</p>
                                        <p>Youtube</p>
                                        <p>Twitter</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9 ">
                                <div className="wrap-2 m-1">
                                    <div className="work-experience pb-4">
                                        <h2>Work Experience</h2>
                                    </div>

                                    <div className="project pb-4">
                                        <h2>Projects</h2>
                                    </div>

                                    <div className="education pb-4">
                                        <h2>Education</h2>
                                    </div>

                                    <div className="awards pb-4">
                                        <h2>Achievements</h2>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                </div>

            </div>
            </>
        )
    }
}
