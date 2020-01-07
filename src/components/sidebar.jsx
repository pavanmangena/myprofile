import React, { Component } from 'react'
import '../css/styling.css'
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/profile_image.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Pavan Kumar</a></h1>
              <span className="email"><i className="icon-mail"></i>pavankumarmangena1998@gmail.com</span>
              {/* <span id="email-style" className="email"><i className="icon-mail"></i><a href="mailto:pavan@pavankumarmangena1998@gmail.com">pavan</a></span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/* <li><a href="#projects" data-nav-section="projects">Projects</a></li> */}
                  <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/pavanmangena" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                      &copy;   This site is developed by <br/><b>Pavan Kumar Mangena</b>
              </small></p>
              <p><small>
                           <span id="email-style" className="email"><i className="icon-mail"></i><a href="mailto:pavan@pavankumarmangena1998@gmail.com">Click here to Email me</a></span> <br/>
                           <span id="email-style" className="email"><i className="icon-phone"></i><a href="tel:7730906818">7730906818</a></span>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
