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
                            <a href="https://www.facebook.com/jordan.harrell2" className="fa fa-facebook"><span className="sr-only">Jordan's Facebook</span></a>
                            <a href="https://www.instagram.com/jord_board/" className="fa fa-instagram"><span className="sr-only">Jordan's Instagram</span></a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

