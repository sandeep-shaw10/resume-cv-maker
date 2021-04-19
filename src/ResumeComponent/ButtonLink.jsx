import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class ButtonLink extends Component {
    constructor(props){
        super()
        this.clearAll = this.clearAll.bind(this)
    }

    clearAll(){
        if(window.confirm("Do you want to Delete all ?")){
            let init = {
                personal:{
                    "name":'',
                    "occupation":'',
                    "phone": '',
                    "email": '',
                    "dob": '',
                    "about": '',
                    "image": '',
                },
                social:{
                    'LinkedIn': '',
                    'Facebook': '',
                    'Github': '',
                    'Twitter': '',
                    'Youtube': '',
                    'Dribbble': ''
                },
                skill: ["Add Skill"],
                language: ["Add Language"],
            }
            //console.log(init)
            //console.log(this.props)
            this.props.updateState(init)
            localStorage.removeItem('resume-data')
        }

    }

    render() {
        var containLink = "/resume";
        return (
            <>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/details"}>Details</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/media"}>Media</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/education"}>Education</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/details"}>Work</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/details"}>Awards</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/skills"}>Skills</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/language"}>Languages</Link>
                <Link className="btn btn-info my-2 mx-1 btn-sm" to={containLink+"/preview"}>Preview</Link>
                <button className="btn btn-danger my-2 mx-1 btn-sm" onClick={this.clearAll}>Delete</button>
            </>
        )
    }
}
