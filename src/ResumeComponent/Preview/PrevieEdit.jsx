import React, { Component } from 'react'

export default class PrevieEdit extends Component 
{
    constructor(props){
        super(props);
        this.removeImage = this.removeImage.bind(this);
        this.printResume = this.printResume.bind(this);
        this.themeColor = this.themeColor.bind(this);
    }

    removeImage = () => {
        let x = this.props.data
        x.data.personal["image"] = ''
        x.updateState(x.social)
    }

    printResume = () => {
        window.print();
    }

    themeColor = (e) => {
        let color = e.target.value;
        this.props.themeColor.theme = color;
        let x = this.props;
        this.props.updateTheme(x.theme);
    }

    textColor = (e) => {
        let color = e.target.value;
        this.props.themeColor.color = color;
        let x = this.props;
        this.props.updateTheme(x.color);
    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className ="btn-group btn-group-sm">
                            <a href="https://sandeep-shaw10.github.io/resume-cv-maker/resume/details" type="button" className="btn btn-primary">Insert Image</a>
                            <button type="button" className="btn btn-danger" onClick={this.removeImage}>Remove Image</button>
                            <button type="button" className="btn btn-warning" onClick={this.printResume}>Print Resume</button>
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="favcolor1" className="label mr-4">Theme Colour: </label>
                            <input type="color" id="favcolor1" name="favcolor1" defaultValue={this.props.themeColor.theme} onChange={(e) => {this.themeColor(e)}} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="favcolor1" className="label mr-4">Text Colour: </label>
                            <input type="color" id="favcolor1" name="favcolor1" defaultValue={this.props.themeColor.color} onChange={(e) => {this.textColor(e)}} />
                        </div>
                     </div>
                </div>
            </div>
        )
    }
}
