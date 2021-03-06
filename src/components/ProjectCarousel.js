import React, { Component } from 'react'
import ProjectCard from './ProjectCard.js'
import SantoIMG from '../images/screenshots/santo_portofino_ss.png'
import PlacesIMG from '../images/screenshots/all_the_places_ss.png'
import FashionIMG from '../images/screenshots/fashion_forward_ss.png'
import AmbientIMG from '../images/screenshots/AmbientJam_ss.png'
import AcquisitionIMG from '../images/screenshots/Acquisition_Tool_ss.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class ProjectCarousel extends Component {
    render() {
        return (
            <Container>
                <h2
                    style={{
                        "text-align": "center",
                        padding: "1em",
                        color: "#849D84"
                    }}
                >Projects</h2>
                <Row>
                    <Col>
                        <ProjectCard
                            number='4'
                            title='Ambient Jam'
                            description='An app that allows you to make music with others! Upon entering the site, users can play the synth and hear everyone else who is currently playing.'
                            image={AmbientIMG}
                            gitHub='https://github.com/jwwharrell/Project-4-App'
                            appLink='https://master.d1huw8oejjdm3j.amplifyapp.com/'
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            number='3'
                            title='fashion forward'
                            description="A CRM tool for wardrobe stylists. Inspired by my brother-in-law/'s work, I wanted to find a way to distill his operation into one space."
                            image={FashionIMG}
                            gitHub='https://github.com/jwwharrell/Project-3-App'
                            appLink='https://fashion-forward-app.herokuapp.com/'
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            number='5'
                            title='Acquisition'
                            description="An online tool that allows the creation and tracking of prospective companies for acquisition. It is purely a front end applictaion with no persisting data."
                            image={AcquisitionIMG}
                            gitHub='https://github.com/jwwharrell/acquisition-tool'
                            appLink='https://master.d27udzalc0jumd.amplifyapp.com/'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectCard
                            number='1'
                            title='Santo Portofino'
                            description="A variation of Simon Says. In my version of the game, there are five buttons (each representing a different not) that light up and play a tone in the same key as the accompanying background music."
                            image={SantoIMG}
                            gitHub='https://github.com/jwwharrell/Project-1-Game'
                            appLink='http://santo-portofino.surge.sh/'
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            number='2'
                            title='All the Places'
                            description='A travel app that catalogues museums and national parks'
                            image={PlacesIMG}
                            gitHub='https://github.com/jwwharrell/Project-2-App'
                            appLink='https://project-travel-app.herokuapp.com/'
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
