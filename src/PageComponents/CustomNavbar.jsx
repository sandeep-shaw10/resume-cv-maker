import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './css/PageComponents.css'


export default class CustomNavbar extends Component {
    render() {
        var containLink = "/details";
        return (
            <>
                <Navbar expand="lg" className="navbar">
                <Navbar.Brand to="/home" className="text-light">Resume Maker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="pr-4 my-1 navlink" to="/home">Home</Link>
                        <Link className="pr-4 my-1 navlink" to={"/resume"+containLink}>Resume</Link>
                        <Link className="pr-4 my-1 navlink" to="/about">About</Link>
                        <Link className="pr-4 my-1 navlink" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}
