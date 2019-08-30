import React from 'react';
import './App.css';
import './animate.css'
import Header from './components/header/header.js'

export default class App extends React.Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <div className="h"></div>
      </div>
    );
  }

}

