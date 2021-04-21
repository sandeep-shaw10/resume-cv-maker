import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume';
import DetailRender from './DetailRender';
import './TextEditor.css'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default class Project extends Component {
    constructor(props){
        super(props)
        this.updateData = this.updateData.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            name: '',
            work: '',
            from: '',
            to: '',
            about: '',
        }
    }

    updateData = () => {
       
        let init = { name: '', work: '', from: '', to: '',about: '',}
        if(this.state.name === '' || this.state.work === '' || this.state.from === ''){
            alert("Atleast enter the Institute Name, work Name and the year")
        }else{
            
            //Pushing to the Props
            let thisData = this.state
            let mainData = this.props

            //Setting the text Editor
            mainData.data.project.push(thisData)
            let x = document.getElementsByClassName("ck-editor__editable");
            let position = mainData.data.project.length - 1
            mainData.data.project[position]["about"] = x[0].innerHTML
            
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
        let position = this.props.data.project.length - val - 1
        let x =  this.props.data.project
        x = x.filter((obj, index) => index!==position)
        
        //update the state
        let result = this.props
        result.data.project = x
        this.props.updateState(result.data)

    }

    render() {
        //alert("Details Rendered");
        return (
            <>
                 <Resume updateState={this.props.updateState} />
                <div className="container py-4 my-4  toggle">
                    <h1 className="text-center display-4">PROJECT</h1>
                    <div className="form-row">
                        <div className="col-12 py-2">
                            <label htmlFor={"name"}> Name </label>
                            <input onChange={this.onChangeInput} value={this.state.name} type="text" className="form-control" placeholder="Enter the Project Name" id={"name"} />
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
                            <label htmlFor={"work"}> {"Certificate"} </label>
                            <input onChange={this.onChangeInput} value={this.state.work} type="text" className="form-control" placeholder={"Enter the "+"Project Specification"} id={"work"} />
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
                        {this.props.data.project.slice(0).reverse().map((obj, index) => {
                            return (
                                <DetailRender 
                                    key={index} 
                                    degree={obj.work} 
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
