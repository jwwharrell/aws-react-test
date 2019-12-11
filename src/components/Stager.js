import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

export default class Stager extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer/> 
            </div>
        )
    }
}
