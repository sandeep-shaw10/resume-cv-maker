import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';
import './Skills.css'

export default class Languages extends Component {
    constructor(props){
        super(props)
        this.validateEnterKey = this.validateEnterKey.bind(this);
        this.deleteKey = this.deleteKey.bind(this);
    }

    validateEnterKey = (e) => {
        if(e.key === 'Enter'){
            //Checking Duplicate
            console.log(this.props.language)
            if (this.props.language.language.includes(e.target.value)) {
                alert("\""+e.target.value+"\" already exists.")
            }else{
                //Updating the languages Box
                let languageArray = this.props.language.language
                languageArray.push(e.target.value)
                this.props.updateState(this.props.language)
                e.target.value = ""
            }
        }
    }

    deleteKey = (keyValue) => {
        //console.log(keyValue)
        let deleteLanguage = this.props.language
        deleteLanguage.language = deleteLanguage.language.filter((language, index) => index !== keyValue)  //Filtering out selected
        this.props.updateState(deleteLanguage)        //Update 
    }



    render() {
        //alert("Details Rendered");
        //console.log(this.props)
        var prox = this.props.language;
        return (
            <>
            <Resume data={this.props} updateState={this.props.updateState}/>
            <div className="container py-4 my-4 toggle" id="toggle-Skills">
                <h1 className="text-center display-4"> LANGUAGE </h1>
                <div className="skill-box">
                    <div className="skill-value text-center">
                        <ul>
                            {prox.language.map((language, index) => {
                                return(
                                    <li key={index}>
                                        <span>{language}</span>
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