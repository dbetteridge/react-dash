import React, { Component } from 'react';
import './App.css';
import Overlay from './Overlay'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="map" id="map">
          <div className="overlay-metrics">
            <div className="metric-title">Metrics</div>
            
          </div>
          <div className="overlay-legend">
            <div className="legend-title">Legends</div>
            <div className="legend-high">
              <div className="legend-high-color"></div>
              <div className="legend-high-text">High</div>
            </div>
            <div className="legend-medium">
              <div className="legend-medium-color"></div>
              <div className="legend-medium-text">Medium</div>
            </div>
            <div className="legend-high">
              <div className="legend-low-color"></div>
              <div className="legend-low-text">Low</div>
            </div>
          </div>
        </div>
        <Overlay />
      </div>
    );
  }
}

export default App;
