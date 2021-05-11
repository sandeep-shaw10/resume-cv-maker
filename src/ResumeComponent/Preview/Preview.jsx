import React, { Component } from 'react'
import Resume from '../../PageComponents/Resume'
import PrevieEdit from './PrevieEdit';
import './Preview.css'

export default class Preview extends Component 
{
    constructor(props){
        super(props);
        this.yearFormatting = this.yearFormatting.bind(this);
        this.state = {
            theme: '#ffb9b9',
            color: '#262626',
        }
        this.updateTheme = this.updateTheme.bind(this);
    }

    yearFormatting = (from,to) => {
        let format = "";
        format = (to !== "")? "( "+from+" - "+to+" )":"( "+from+" )";
        return format;
    }

    updateTheme = (x) => {
        this.setState({...x});
    }

    render() 
    {
        //console.log(this.props);
        var prox = this.props.data;
        var image = prox.personal["image"];
        var imageClass = (image === '')?"col-12":"col-9";
        var education = prox.education;
        var work = prox.work;
        var awards = prox.awards;
        var project = prox.project;
        var skill = prox.skill;
        var language = prox.language;
        var social = prox.social;
                
        //Styling
        const personalDetail = {
            backgroundColor: this.state.theme,
        }

        const borderBottom = {
            borderBottom: '2px solid '+this.state.theme,
        }

        const textColor = {
            color: this.state.color,
        }

        return ( 
            <>
            <Resume updateState={this.props.updateState} />

            <PrevieEdit data={this.props} updateTheme={this.updateTheme} themeColor={this.state}/>


            <div className="container my-4 bg-light py-3" id="resume" style={textColor}>

                <div className="detail-preview container">
                    <div className="row">
                        {image = (image === '')?'':
                        <div className="col-3">
                            <img className="img-fluid" src={image} alt="Re-upload if not displayed" />
                        </div>
                        }
                        <div className={imageClass} style={personalDetail}>
                            <h1>{prox.personal["name"]}</h1>
                            <h5>{prox.personal["occupation"]}</h5>
                            <hr className="m-1"/>
                            <p>{prox.personal["about"]}</p>
                        </div>
                    </div>
                </div>

                <div className="media-preview container">
                    <div className="row p-1 ">
                        {(prox.personal["phone"] !== "")?<div className="col-3 d-flex "><i className="fa fa-mobile"></i> <p className="ml-1"> {prox.personal["phone"]} </p></div>:""}
                        {(prox.personal["email"] !== "")?<div className="col-3 d-flex "><i className="fa fa-envelope"></i> <p className="ml-1"> {prox.personal["email"]} </p></div>:""}
                        {(prox.personal["website"] !== "")?<div className="col-3 d-flex "><i className="fa fa-globe"></i> <p className="ml-1"> {prox.personal["website"]} </p> </div>:""}
                        {(social.LinkedIn !== "")?<div className="col-3 d-flex "><i className="fa fa-linkedin"></i> <p className="ml-1"> {social.LinkedIn} </p> </div>:""}
                    </div>
                </div>

                <div className="content-preview container  m-1">
                        <div className="row">
                            <div className="col-3 ">
                                <div className="wrap-1 m-1" style = {{borderRight: '2px solid '+this.state.theme}}>
                                    {/* Objects -> Value in list -> Filter the empty value -> length */}
                                    {
                                        (Object.values(social).filter(x => x !== "").length !== 0)?
                                        <div className="social-media pb-4">
                                            <h4>Social Media</h4>
                                            {(social.Github !== ""? <p> <i className="fa fa-github"></i> {social.Github} </p> :"")}
                                            {(social.Dribbble !== ""? <p> <i className="fa fa-dribbble"></i> {social.Dribbble} </p> :"")}
                                            {(social.Facebook !== ""? <p> <i className="fa fa-facebook"></i> {social.Facebook} </p> :"")}
                                            {(social.Youtube !== ""? <p> <i className="fa fa-youtube"></i> {social.Youtube} </p> :"")}
                                            {(social.Twitter !== ""? <p> <i className="fa fa-twitter"></i> {social.Twitter} </p> :"")}
                                        </div>
                                        :""
                                    }

                                    {
                                        (skill.length !== 0)?
                                        <div className="skills pb-4 ">
                                            <h4>Technical Skills</h4>
                                            <ul className="ml-2">
                                                {skill.map((x) => <li key={x} className="mb-0">{x}</li> )}
                                            </ul>
                                        </div>
                                        :""
                                    }

                                    {
                                        (language.length !== 0)?
                                        <div className="language pb-4">
                                            <h4>Languages</h4>
                                            <ul className="ml-2">
                                                {language.map((x) => <li key={x} className="mb-0">{x}</li> )}
                                            </ul>
                                        </div>
                                        :""
                                    }                                   

                                </div>
                            </div>
                            <div className="col-9 ">
                                <div className="wrap-2 m-1">
                                    
                                        {
                                            (Object.values(work).length !== 0)?
                                            <div className="work-experience pb-4">
                                                <h2 style={borderBottom}>Work Experience</h2>
                                                {(Object.values(work).map(x => 
                                                        <div className="wrap mb-2" key={x.work}>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="m-0 lead"><cite>{x.work}</cite></p>
                                                                <p className="text-right m-0 lead"> {this.yearFormatting(x.from,x.to)} </p>
                                                            </div>
                                                            <p className="text-muted m-0">{x.name }</p> 
                                                            <div className="wrap-about-resume text-muted m-0" dangerouslySetInnerHTML={{__html: x.about}}></div>
                                                        </div> 
                                                ))}
                                            </div>
                                            :""
                                        }
                                    
                                        {
                                            (Object.values(project).length !== 0)?
                                            <div className="projec pb-4">
                                                <h2 style={borderBottom}>Projects</h2>
                                                {(Object.values(project).map(x => 
                                                        <div className="wrap mb-2" key={x.work}>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="m-0 lead"><cite>{x.work}</cite></p>
                                                                <p className="text-right m-0 lead"> {this.yearFormatting(x.from,x.to)} </p>
                                                            </div>
                                                            <p className="text-muted m-0">{x.name }</p> 
                                                            <div className="wrap-about-resume text-muted m-0" dangerouslySetInnerHTML={{__html: x.about}}></div>
                                                        </div> 
                                                ))}
                                            </div>
                                            :""
                                        }

                                        {
                                            (Object.values(education).length !== 0)?
                                            <div className="education pb-4">
                                                <h2 style={borderBottom}>Education</h2>
                                                {(Object.values(education).map(x => 
                                                        <div className="wrap mb-2" key={x.degree}>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="m-0 lead"><cite>{x.degree}</cite></p>
                                                                <p className="text-right m-0 lead"> {this.yearFormatting(x.from,x.to)} </p>
                                                            </div>
                                                            <p className="text-muted m-0">{x.name }</p> 
                                                            <div className="wrap-about-resume text-muted m-0" dangerouslySetInnerHTML={{__html: x.about}}></div>
                                                        </div> 
                                                ))}           
                                            </div>
                                            :""
                                        } 

                                        {
                                            (Object.values(awards).length !== 0)?
                                            <div className="awards pb-4">
                                                <h2 style={borderBottom}>Achievements</h2>
                                                {(Object.values(awards).map(x => 
                                                        <div className="wrap mb-2" key={x.work}>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="m-0 lead"><cite>{x.work}</cite></p>
                                                                <p className="text-right m-0 lead"> {this.yearFormatting(x.from,x.to)} </p>
                                                            </div>
                                                            <p className="text-muted m-0">{x.name }</p> 
                                                            <div className="wrap-about-resume text-muted m-0" dangerouslySetInnerHTML={{__html: x.about}}></div>
                                                        </div> 
                                                ))}
                                            </div>
                                            :""
                                        }
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>          
            </>
        )
    }
}
