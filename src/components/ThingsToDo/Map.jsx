import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{
          lat: 20.2114,
          lng: -87.4654,
        }}
        style={{ width: "80%", height: 500, margin: "0 auto" }}
      >

      <Marker
        name={'Tulum'}
        position={{lat: 20.2114, lng: -87.4654}} />
      <Marker />
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyBycvTl0JDsFyOasF5SiFw8lgFNcFXrzi4"
})(MapContainer)