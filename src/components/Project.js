import React, { Component } from 'react'
import "../css/Project.css"

export default class Project extends Component {
    render() {
        return (
            <div className='project-card'>
                <h3>{this.props.title}</h3>
                <p className='proj-links'>
                    <a href={this.props.gitHub}>GitHub</a>
                    <a href={this.props.appLink}>{this.props.title} App</a>
                </p>
                <p>{this.props.description}</p>

            </div>
        )
    }
}
