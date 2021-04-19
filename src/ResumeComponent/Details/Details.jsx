import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';

class Details extends Component {

    constructor(props){
        super()
        this.name = props.detail.personal["name"]
        console.log(this.name)
        this.updateData = this.updateData.bind(this);
    }

    updateData = (e) => {
        let location = e.target.id
        this.bitData = e.target.value
        this.props.detail.personal[location] = this.bitData

        let x = this.props;
        this.props.updateState(x.personal)
    }

    initState(){
        console.log("Details")
    }


    render() {
        //alert("Details Rendered");
        var propx = this.props.detail

        return (
            <>
                <Resume updateState={this.props.updateState} />
                <div className="container py-4 my-4  toggle">
                    <h1 className="text-center display-4">PERSONAL DETAIL</h1>
                    <div className="form-row">
                        <div className="col-lg-6 col-md-12 py-2">
                            <input type="text" id="name" value={propx.personal["name"]} onChange={this.updateData} className="form-control personal-form" placeholder="Full Name" />
                        </div>
                        <div className="col-lg-6 col-md-12 py-2">
                            <input type="text" id="occupation" value={propx.personal["occupation"]} onChange={this.updateData} className="form-control personal-form" placeholder="Current Occupation" />
                        </div>
                        <div className="col-lg-4 col-md-6 py-2">
                            <input type="text" id="phone" value={propx.personal["phone"]} onChange={this.updateData} className="form-control personal-form" placeholder="Phone no." />
                        </div>
                        <div className="col-lg-4 col-md-6 py-2">
                            <input type="email" id="email" value={propx.personal["email"]} onChange={this.updateData} className="form-control personal-form" placeholder="Email" />
                        </div>
                        <div className="col-lg-4 col-md-7 py-2">
                            <input type="date" id="dob" value={propx.personal["dob"]} onChange={this.updateData} className="form-control personal-form" placeholder="Date of Birth" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="objective">Your Aim / Objective / About </label>
                            <textarea id="about" value={propx.personal["about"]} onChange={this.updateData} className="form-control personal-form" rows="5"></textarea>
                        </div>
                        <div className="col-12">
                            <label htmlFor="imageField">Enter Image</label>
                            <input type="file" className="form-control-file personal-form" id="imageField" />
                        </div>
                    </div>
                </div>
                <div className="mb-5">

                </div>
            </>
        )
    }
}

export default Details;
