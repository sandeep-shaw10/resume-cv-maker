import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';
import DetailRender from './DetailRender';
import './TextEditor.css'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default class Education extends Component {
    constructor(props){
        super(props)
        this.updateData = this.updateData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            name: '',
            degree: '',
            from: '',
            to: '',
            about: '',
        }
    }

    updateData = () => {
       
        let init = { name: '', degree: '', from: '', to: '',about: '',}
        if(this.state.name === '' || this.state.degree === '' || this.state.from === ''){
            alert("Atleast enter the Institute Name, Degree Name and the year")
        }else{
            
            //Pushing to the Props
            let thisData = this.state
            let mainData = this.props

            //Setting the text Editor
            mainData.data.education.push(thisData)
            let x = document.getElementsByClassName("ck-editor__editable");
            let position = mainData.data.education.length - 1
            mainData.data.education[position]["about"] = x[0].innerHTML
            
            //Updating the props
            this.props.updateState(mainData.data)

            //Initializing the current state
            this.setState(init)
            x[0].innerHTML = "<p> About......... </p>"
        }  
    }

    onChangeInput = (e) => {
        let id = e.target.id;
        let x = this.state
        x[id] = e.target.value;
        this.setState(x);
    }

    handleDelete = (val) => {
        //Filter out the index array
        let position = this.props.data.education.length - val - 1
        let x =  this.props.data.education
        x = x.filter((obj, index) => index!==position)
        
        //update the state
        let result = this.props
        result.data.education = x
        this.props.updateState(result.data)

    }

    render() {
        //alert("Details Rendered");
        return (
            <>
                 <Resume updateState={this.props.updateState} />
                <div className="container py-4 my-4  toggle">
                    <h1 className="text-center display-4">EDUCATION</h1>
                    <div className="form-row">
                        <div className="col-12 py-2">
                            <label htmlFor={"name"}> Name </label>
                            <input onChange={this.onChangeInput} value={this.state.name} type="text" className="form-control" placeholder="Enter the Institution Name" id={"name"} />
                        </div>
                        <div className={"col-md-3 col-6" + " py-2 "}>
                            <label htmlFor={"from"}> From </label>
                            <input onChange={this.onChangeInput} value={this.state.from} type="number" className="form-control" placeholder="Enter the Year" id={"from"}/>
                        </div>
                        <div className={"col-md-3 col-6" + " py-2 " + " " /* <== display */}>
                            <label htmlFor={"to"}> To </label>
                            <input onChange={this.onChangeInput} value={this.state.to} type="number" className="form-control" placeholder="Enter the Year" id={"to"}/>
                        </div>
                        <div className="col-md-6 col-12 py-2">
                            <label htmlFor={"degree"}> {"Degree"} </label>
                            <input onChange={this.onChangeInput} value={this.state.degree} type="text" className="form-control" placeholder={"Enter the "+"degree"+" Name"} id={"degree"} />
                        </div>
                        <div className="col-12 py-2">
                            <label > About </label>
                        {/*-----------------------------------------------*/}
                        < CKEditor 
                            editor = { ClassicEditor }
                            data = "<p> About......... </p>"
                        />
                        {/*-----------------------------------------------*/}
                        </div>
                        <div className="mx-auto mt-2 mb-4">
                            <button className="btn btn-dark" onClick={this.updateData}>ADD <i className="fa fa-plus"></i> </button>
                        </div>
                    </div>
                </div>
                
                <hr/>

                    <div className="container">
                        {this.props.data.education.slice(0).reverse().map((obj, index) => {
                            return (
                                <DetailRender 
                                    key={index} 
                                    degree={obj.degree} 
                                    place={obj.name} 
                                    about={obj.about} 
                                    from={obj.from} 
                                    to ={obj.to}
                                    value = {index}
                                    handleDelete = {this.handleDelete}
                                    display = "block"
                                />
                            );
                        })}
                    </div>
            </>
        )
    }
}
