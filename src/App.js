import React from 'react';
import './App.css';
import './animate.css'
import Header from './components/header/header.js'
import Feature from './components/feature.js';
import About from './components/aboutus.js';
import Project from './components/project.js';
import Team from './components/team.js';
export default class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <Feature/>
        <About/>
        <Project/>
        <Team/>
        <div className="h"></div>
      </div>
    );
  }

}

