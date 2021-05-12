import React, { Component } from 'react'
import icon from './images/icon.png'
import {Link} from "react-router-dom";
import './css/style.css'
import Blob from './Blob';

export default class HomeDisplay extends Component {
    render() {
        var containLink = "/details";
        return (
            <>
                <div className="my-4">
                    <div className="homeScreen d-flex justify-content-between">
                        <div className="animate">
                            <img className="imd-fluid" src={icon} alt="icon"/>
                        </div>
                        <div className="adjust">
                            <div className="wrap text-center my-4 py-4">
                                <h1 className="mt-4">React Resume Maker</h1>
                                <div className="content">
                                    <p className="lead px-3" >
                                        <i className="fa fa-quote-left"></i> Now create your Resume and CV Instantly 
                                        with the help of this App made with JavaScript 
                                        Library - React <i className="fa fa-quote-right"></i> 
                                    </p>
                                    <Link to={"/resume"+containLink} className="btn btn-primary btn-lg">Start</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BlobMaker */}
                <Blob heading="Ready in 4 Simple Steps" />
            </>
        )
    }
}
