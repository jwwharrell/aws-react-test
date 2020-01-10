import React, { Component } from 'react'
import "../css/Project.css"
import 'animate.css'

export default class Project extends Component {
    render() {
        return (
            <div>
                <div className='project-card'>
                    <h3>{this.props.title}</h3>
                    <p className='proj-links'>
                        <a href={this.props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={this.props.appLink} target="_blank" rel="noopener noreferrer">{this.props.title} App</a>
                    </p>
                    <p>{this.props.description}</p>

                </div>
            </div>
        )
    }
}
