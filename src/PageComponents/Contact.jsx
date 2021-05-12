import React, { Component } from 'react'
import './css/PageComponents.css'

export default class Contact extends Component {

    constructor(props){
        super(props);
        this.sendMail = this.sendMail.bind(this);
        this.onFilled = this.onFilled.bind(this);
        this.state = {
            subject: '',
            name: '',
            content: '',
        }
    }

    onFilled = (e) => {
        let x =this.state
        if(e.target.name == "subject"){
            x.subject = e.target.value;
            this.setState({...x});
        }else if(e.target.name == "name"){
            x.name = e.target.value;
            this.setState({...x});
        }else{
            x.content = e.target.value;
            this.setState({...x});
        }
    }

    sendMail = () => {
        if(this.state.name && this.state.subject && this.state.content)
        {
            let subject = this.state.subject;
            let name = "Hello I'am "+this.state.name+".\n I wanna say: ";
            let content = name + this.state.content;
            let myid = "sandeep10shaw@gmail.com;"
            window.location = "mailto:"+myid+"?subject="+subject+"&body="+content;
        }else{
            if(this.state.name){
                alert("Hello "+this.state.name+", Please fill the full Contact Form");
            }
            else{
                alert("Kindly fill the full Contact Form Please!");
            }
        }
    }

    render() {

        return (
            <div className="my-5">
                <h1 className="underline text-center">Get in Touch</h1>
                <div className="container mt-4 p-3" style={{backgroundColor: '#05ADB3'}}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.480006828726!2d88.36168653002676!3d22.621329162521988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d863d23ee2f%3A0x25291926882ed35!2sCossipore%2C%20Kolkata%2C%20West%20Bengal%20700002!5e0!3m2!1sen!2sin!4v1620815315034!5m2!1sen!2sin"
                              style = {{width: '100%', height:'500px', border:"0"}} frameBorder="0px" allowFullScreen />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2 className = "text-uppercase mt-3 font-weight-bold text-white">CONTACT US</h2>
                            
                                <div className = "row">
                                    <div className = "col-lg-12">
                                        <div className = "form-group">
                                            <input value={this.state.name} name="name" type="text" className = "form-control mt-2" placeholder="Enter Name" required onChange={this.onFilled}/>
                                        </div>
                                    </div>
                                    <div className = "col-lg-12">
                                        <div className = "form-group">
                                            <input value={this.state.subject} name="subject" type="text" className = "form-control mt-2" placeholder="Enter Subject" required onChange={this.onFilled} />
                                        </div>
                                    </div>
                                    <div className = "col-12">
                                        <div className = "form-group">
                                            <textarea value={this.state.content} name="content" className = "form-control" id="exampleFormControlTextarea1" placeholder="Enter Message" rows="5" required onChange={this.onFilled}></textarea>
                                        </div>
                                    </div>
                                    <div className = "col-12">
                                        <button className = "btn btn-light" onClick={this.sendMail}>Send</button>
                                    </div>
                                </div>

                            <div className = "text-white">
                                <h2 className = "text-uppercase mt-4 font-weight-bold">FOLLOW US</h2>
                                <a target="_blank" rel="noreferrer" className="social-icon pr-4" href="https://github.com/sandeep-shaw10"><i className = "fa fa-github fa-3x "></i></a>
                                <a target="_blank" rel="noreferrer" className="social-icon  pr-4" href="linkedin.com/in/sandeep-shaw-b47b47158/"><i className = "fa fa-linkedin fa-3x"></i></a>
                                <a target="_blank" rel="noreferrer" className="social-icon  pr-4" href="https://www.instagram.com/san_deep_10/"><i className = "fa fa-instagram fa-3x"></i></a>
                                <a target="_blank" rel="noreferrer" className="social-icon  pr-4" href="https://www.youtube.com/channel/UCnzoz-Snqs689f1YLqi--zg"><i className = "fa fa-youtube-play fa-3x"></i></a>
                            </div>
                        </div>
                    </div>     
                </div>
            </div>
        )
    }
}
