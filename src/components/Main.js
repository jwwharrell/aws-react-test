import React, { Component } from 'react'
import '../css/Main.css'
import ProjectCarousel from './ProjectCarousel'

export default class Main extends Component {
    
    componentDidMount() {
        console.log("Component")
        
    }
    render() {
        return (
            <div className='main-conatainer'>
              <ProjectCarousel />  
            </div>
        )
    }
}
