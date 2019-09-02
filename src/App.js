import React from 'react';
import './App.css';
import './animate.css'
import Header from './components/header/header.js'
import Feature from './components/feature.js';
import About from './components/aboutus.js';
import Project from './components/project.js';
import Team from './components/team.js';
import News from './components/news.js';
import Testimonial from './components/testimonial.js';
import Newsletter from './components/newsletter.js';
import Footer from './components/footer.js';
export default class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <Feature/>
        <About/>
        <Project/>
        <Team/>
        <News/>
        <Testimonial/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }

}

