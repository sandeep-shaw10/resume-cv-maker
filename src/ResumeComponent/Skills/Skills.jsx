import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';
import './Skills.css'

export default class Skills extends Component {

    constructor(props){
        super(props)
        this.validateEnterKey = this.validateEnterKey.bind(this);
        this.deleteKey = this.deleteKey.bind(this);
    }

    validateEnterKey = (e) => {
        if(e.key === 'Enter'){
            //Checking Duplicate
            console.log(this.props.skill)
            if (this.props.skill.skill.includes(e.target.value)) {
                alert("\""+e.target.value+"\" already exists.")
            }else{
                //Updating the Skills Box
                let skillArray = this.props.skill.skill
                skillArray.push(e.target.value)
                this.props.updateState(this.props.skill)
                e.target.value = ""
            }
        }
    }

    deleteKey = (keyValue) => {
        //console.log(keyValue)
        let deleteSkill = this.props.skill
        deleteSkill.skill = deleteSkill.skill.filter((skill, index) => index !== keyValue)  //Filtering out selected
        this.props.updateState(deleteSkill)        //Update 
    }



    render() {
        //alert("Details Rendered");
        //console.log(this.props)
        var prox = this.props.skill;
        return (
            <>
            <Resume data={this.props} updateState={this.props.updateState}/>
            <div className="container py-4 my-4 toggle" id="toggle-Skills">
                <h1 className="text-center display-4"> SKILLS</h1>
                <div className="skill-box">
                    <div className="skill-value text-center">
                        <ul>
                            {prox.skill.map((skill, index) => {
                                return(
                                    <li key={index}>
                                        <span>{skill}</span>
                                        <button onClick={() => this.deleteKey(index)}>
                                            <span className='close-btn'><i className="fa fa-close"></i></span>
                                        </button>
                                    </li> 
                                );
                            })}                          
                        </ul>
                    </div>    
                </div>
                <div className="form-group row mt-3 mx-auto">
                    <div className="col-6 mx-auto">
                        <input type="text" className="form-control" maxLength="25" id="key-skill"
                        placeholder="Type your skill and press enter"
                        onKeyDown={this.validateEnterKey}
                        />
                    </div>
                </div>
            </div>
            </>
        )
    }
}
