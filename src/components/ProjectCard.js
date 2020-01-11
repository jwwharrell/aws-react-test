import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class ProjectCard extends Component {
    render() {
        return (
            <Card 
            style={{ 
                width: '18rem',
                margin: 'auto',
                "margin-bottom": "0.75rem"
                 }}
            bg="success"
            text="danger"
            >
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="primary" href={this.props.appLink} target="_blank" rel="noopener noreferrer">{this.props.title} App</Button>
                    <Button variant="secondary" href={this.props.gitHub} target="_blank" rel="noopener noreferrer">GitHub</Button>
                </Card.Body>
            </Card>
        )
    }
}
