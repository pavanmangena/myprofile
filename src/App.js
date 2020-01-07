import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Blog from './components/blog'
import Projects from './components/projects'
import ContactCard from './components/contact-card'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <Navbar></Navbar>
        <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Introduction></Introduction>
            <About></About>
            <ContactCard></ContactCard>
            <Blog></Blog>
            <Timeline></Timeline>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
