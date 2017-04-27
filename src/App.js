import React, { Component } from 'react';
import './App.css';
import Overlay from './Overlay'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="map" id="map"></div>
        <Overlay />
      </div>
    );
  }
}

export default App;
