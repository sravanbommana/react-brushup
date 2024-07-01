import React, { Component } from 'react'

export class GoogleMap extends Component {

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.map = new google.map.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    });
  }
  render() {
    return (
      <div id="map" ref="map">
        
      </div>
    )
  }
}

export default GoogleMap
