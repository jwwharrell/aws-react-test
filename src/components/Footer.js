import React, { Component } from 'react'
import '../css/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-list">
                        <h2>Projects</h2>
                        <ul>
                            <li><a href="https://github.com/jwwharrell/Project-4-App">React-Socket.IO Application</a></li>
                            <li><a href="https://github.com/jwwharrell/Project-3-App">MERN Stack Application</a></li>
                            <li><a href="https://github.com/jwwharrell/Project-2-App">MEHN Stack Application</a></li>
                            <li><a href="https://github.com/jwwharrell/Project-1-Game">Javascript Game</a></li>
                        </ul>
                    </div>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>I am an excited and optimistic new student at General Assembly's Atlanta campus. I am studying software
                          engineering, and beginning a path towards a new career. Listed to the left are empty project links, that
                          hopefully, over the next several weeks, will begin to fill with applications that will interest more than
            myself!</p>
                    </div>
                </footer>
            </div>
        )
    }
}
