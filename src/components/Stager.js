import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default class Stager extends Component {
    state = {
        projectClicked: false,
        aboutMeClicked: false,
        showingMain: true
    }

    projectButton = () => {
        const newProjectValue = true
        const newAboutValue = false
        const newMainValue = false
        const previousState = { ...this.state }
        previousState.projectClicked = newProjectValue
        previousState.aboutMeClicked = newAboutValue
        previousState.showingMain = newMainValue
        this.setState(previousState)
    }

    aboutMeButton = () => {
        const newAboutValue = true
        const newProjectValue = false
        const newMainValue = false
        const previousState = { ...this.state }
        previousState.aboutMeClicked = newAboutValue
        previousState.projectClicked = newProjectValue
        previousState.showingMain = newMainValue
        this.setState(previousState)
    }

    homeButton = () => {
        const newMainValue = true
        const newAboutValue = false
        const newProjectValue = false
        const previousState = { ...this.state }
        previousState.aboutMeClicked = newAboutValue
        previousState.projectClicked = newProjectValue
        previousState.showingMain = newMainValue
        this.setState(previousState)
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.showingMain ? <Main /> : null}
                <div className="navLinks">
                    {this.state.showingMain ? null : <h4
                        onClick={this.homeButton}
                    >Home</h4>}
                    {this.state.projectClicked ? null : <h4
                        onClick={this.projectButton}
                    >Projects</h4>}
                    {this.state.aboutMeClicked ? null : <h4
                        onClick={this.aboutMeButton}
                    >About Me</h4>}
                </div>
                {this.state.showingMain ? 
                <Footer
                about={this.state.aboutMeClicked}
                project={this.state.projectClicked}
                main={this.state.showingMain}
                 /> : null}
                {this.state.projectClicked ? 
                <Footer
                about={this.state.aboutMeClicked}
                project={this.state.projectClicked}
                main={this.state.showingMain}
                 /> : null}
                {this.state.aboutMeClicked ? 
                <Footer
                about={this.state.aboutMeClicked}
                project={this.state.projectClicked}
                main={this.state.showingMain}
                 /> : null}
            </div>
        )
    }
}
