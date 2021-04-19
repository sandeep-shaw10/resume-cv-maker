import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';

export default class Media extends Component {

    constructor(props){
        super(props);
        this.updateData = this.updateData.bind(this);
    }

    updateData = (e) => {
        let location = e.target.id;
        this.bitData = e.target.value;
        this.props.social.social[location] = this.bitData;

        let x = this.props;
        this.props.updateState(x.social)

        //console.log(e);
    }

    render() {
        //alert("Details Rendered");
        const social = [
            {favicon: "fa-linkedin", place: "LinkedIn"},
            {favicon: "fa-facebook-square", place: "Facebook"},
            {favicon: "fa-github", place: "Github"},
            {favicon: "fa-twitter", place: "Twitter"},
            {favicon: "fa-youtube", place: "Youtube"},
            {favicon: "fa-dribbble", place: "Dribbble"},
        ]
        var prox = this.props.social;
        //console.log(this.props)
        return (
            <>
                <Resume updateState={this.props.updateState} />
                <div className="container py-4 my-4  toggle">
                <h1 className="text-center display-4"> SOCIAL MEDIA</h1>
                <div className="row">
                    {social.map((social, index) => {
                        return(
                            <div key={index}  className="col-lg-6 col-md-12 mb-4">
                                <div className="social-wrap d-flex justify-content-between">
                                    <div className="mx-2"> <i className={"fa "+social.favicon+" fa-2x"}></i> </div>
                                    <input type="text" id={social.place} onChange={this.updateData} className="form-control form-control-social" placeholder={social.place} value={prox.social[social.place]}/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            </>
        )
    }
}
