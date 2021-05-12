import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import CustomNavbar from './PageComponents/CustomNavbar';
import Footer from './PageComponents/Footer';
import Home from './PageComponents/Home';
import About from './PageComponents/About';
import Contact from './PageComponents/Contact';
import Details from './ResumeComponent/Details/Details'
import Media from './ResumeComponent/Media/Media';
import Education from './ResumeComponent/Career/Education';
import Skills from './ResumeComponent/Skills/Skills';
import Languages from './ResumeComponent/Skills/Languages';
import Preview from './ResumeComponent/Preview/Preview';
import Work from './ResumeComponent/Career/Work';
import Awards from './ResumeComponent/Career/Awards';
import Project from './ResumeComponent/Career/Project';


class App extends Component {

    constructor(){
        super()
        if(localStorage.getItem('resume-data')){
            this.state = JSON.parse(localStorage.getItem('resume-data'));
        }else{
            this.state = {
                personal:{
                    "name":'',
                    "occupation":'',
                    "phone": '',
                    "email": '',
                    "website": '',
                    "about": '',
                    "image": ''
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
                education:[
                    {
                      "name": 'Institute of ABC, XYZ',
                      "degree": 'B. Sc',
                      "from": '2015',
                      "to": '2018',
                      "about": '<p> About.... </p>',
                    }
                ],
                work:[
                    {
                      "name": 'Teach ABC, XYZ',
                      "work": 'Web Developer',
                      "from": '2015',
                      "to": '2018',
                      "about": '<p> About.... </p>',
                    }
                ],
                awards:[
                    {
                        "name": 'Certificate of Something',
                        "work": 'Hackathon',
                        "from": '2015',
                        "to": '',
                        "about": '<p> About.... </p>',
                      }
                ],
                project:[
                    {
                        "name": 'ML Project',
                        "work": 'Data Visualization',
                        "from": '2015',
                        "to": '',
                        "about": '<p> About.... </p>',
                      }
                ]
            }
            localStorage.setItem('resume-data',JSON.stringify(this.state))
        } 
        this.updateState = this.updateState.bind(this);
    }


    updateState = (x) => {
        this.setState({...x});
        //console.log(this.state);
        localStorage.setItem('resume-data',JSON.stringify(this.state))
    }

    
    render() {
        var containLink = "/resume";
        return (
            <>
                <Router basename="/resume-cv-maker">
                    <CustomNavbar />
                    <Switch>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contact" component={Contact}/>

                        <Route exact path={containLink+"/details"}>
                            <Details detail={this.state} updateState={this.updateState}/>
                        </Route>
                        <Route exact path={containLink+"/media"} >
                            <Media social={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/education"}>
                            <Education data={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/work"}>
                            <Work data={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/awards"}>
                            <Awards data={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/skills"} >
                            <Skills skill={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/language"}>
                            <Languages language={this.state} updateState={this.updateState}  />
                        </Route>
                        <Route exact path={containLink+"/project"}>
                            <Project data={this.state} updateState={this.updateState}  />
                        </Route>
                        <Route exact path={containLink+"/preview"}>
                            <Preview data={this.state} updateState={this.updateState}  />
                        </Route>
                        <Route path="" component={Home} />
                    </Switch>
                    <Footer />
                </Router>
            </>
        )
    }
}


export default App;
//social={this.state} updateState={this.updateState}
