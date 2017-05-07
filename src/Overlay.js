import React, { Component } from 'react';
import './App.css';

class Overlay extends Component {
  componentDidMount(){
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [115.8605, -31.9505], // starting position
    zoom: 11 // starting zoom
    });
  }

  render() {
    return (
      <div className="Overlay">
        
      </div>
    );
  }
}

export default Overlay;
