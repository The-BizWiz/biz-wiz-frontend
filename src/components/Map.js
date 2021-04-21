import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [{latitude: 40.7831, longitude: -73.9712, name: 'Manhattan'},
                  {latitude: 40.6782, longitude: -73.9442, name: 'Brooklyn'},
                  {latitude: 40.5795, longitude: -74.1502, name: 'Staten Island'},
                  {latitude: 40.7282, longitude: -73.7949, name: 'Queens'},
                  {latitude: 40.8448, longitude: -73.8648, name: 'Bronx'}]
    }
  }

  displayMarkers = () => {
    return this.state.locations.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 40.128, lng: -74.006}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'Your Token Here'
})(MapContainer);