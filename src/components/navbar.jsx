import React, { Component } from 'react'
import '../css/styling.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div id="navbar" className="header-values">
                        <a href="#home" data-nav-section="home">Introduction</a>
                        <a href="#about" data-nav-section="about">About</a>
                        <a href="#blog" data-nav-section="blog">Blog</a>
                        <a href="#timeline" data-nav-section="timeline">Timeline</a>
                        {/* <div className="icon-header-class">
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                            <a href="https://github.com/pavanmangena" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                            <a href="" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a>
                        </div> */}
                    </div>
                </nav>
            </div>
        )
    }
}
