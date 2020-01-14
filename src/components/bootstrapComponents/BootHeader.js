import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'

export default class BootHeader extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <Image
                        alt="Jordan's Face"
                        src={require("../../images/profilish-pic-square.jpg")}
                        roundedCircle
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Text>
                    Jordan Wadsworth-Harrell
                </Navbar.Text>
                <Nav.Link href='#aboutMe'>About Me</Nav.Link>
                <NavDropdown title="Contact" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">LinkedIn</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Email</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        )
    }
}
