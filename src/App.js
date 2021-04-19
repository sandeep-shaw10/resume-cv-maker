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
                <Router>
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
                        <Route exact path={containLink+"/education"} component={Education}/>
                        <Route exact path={containLink+"/skills"} >
                            <Skills skill={this.state} updateState={this.updateState} />
                        </Route>
                        <Route exact path={containLink+"/language"}>
                            <Languages language={this.state} updateState={this.updateState}  />
                        </Route>
                        <Route exact path={containLink+"/preview"}>
                            <Preview data={this.state} updateState={this.updateState}  />
                        </Route>
                        <Route path="/" component={Home} />
                    </Switch>
                    <Footer />
                </Router>

                {/* Remove it later */}
                <div className="container my-5 py-5">
                    
                </div>
            </>
        )
    }
}


export default App;
//social={this.state} updateState={this.updateState}
