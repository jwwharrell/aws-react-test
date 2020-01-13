import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export default class LandingPage extends Component {
    render() {
        return (
            <div
                className='view'
                style={{
                    "background-image": "url('https://images.unsplash.com/photo-1461397821064-32d6b3c91b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-position": "center center"
                }}
            >
                <Container
                style={{
                    "height": "100%"
                }}
                className='justify-content-center align-items-center'
                
                >
                    <Card 
                    style={{ 
                        width: '18rem',
                        'margin': '0 auto'
                         }}
                    bg='danger'
                    >
                        <Card.Body>
                            <Card.Title
                                style={{
                                    "color": "#849D84"
                                }}
                            >Welcome</Card.Title>
                            <Card.Text>
                                My name is Jordan, come check out my work!
                            </Card.Text>
                            <Link
                                to='/stager'
                                style={{
                                    "text-align": "center"
                                }}
                            >ENTER</Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}
