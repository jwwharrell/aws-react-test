import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Welcome</h1>
                    <Row className="justify-content-center">
                        <Link
                            to='/stager'
                            style={{
                                "text-align": "center"
                            }}
                        >ENTER</Link>
                    </Row>
                </Container>
            </div>
        )
    }
}
