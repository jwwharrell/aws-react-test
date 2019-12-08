import React, { Component } from 'react'
import  '../css/Header.css'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="header-container">
                        <img src={require("../images/profilish-pic-square.jpg")} alt="Jordan's face." />
                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/jordan-harrell-37abaa68" className="fa fa-linkedin"><span className="sr-only">Jordan's Linked In</span></a>
                            <a href="https://github.com/jwwharrell" className="fa fa-github"><span className="sr-only">Jordan's GitHub</span></a>
                            <a href="mailto: jwharrell0516@gmail.com" className="fa fa-envelope"><span className="sr-only">Email Jordan</span></a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

