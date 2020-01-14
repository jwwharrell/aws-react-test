import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import BootHeader from './bootstrapComponents/BootHeader.js'

export default class Stager extends Component {

    render() {
        return (
            <div>
                <BootHeader />
                <Main />
                <Footer/> 
            </div>
        )
    }
}
