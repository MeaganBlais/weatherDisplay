import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // console.log("map:", this.refs.map);
    // to access info use this.refs.map
    return <div className="maps" ref="map" />;
  }
}

export default GoogleMap;
