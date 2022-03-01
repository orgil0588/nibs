import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(() => (
      <GoogleMap
        defaultCenter={{ lat: 47.919222609724244, lng: 106.9205270142901 }}
        defaultZoom={13}
      >
        {" "}
        {
          <Marker
            position={{ lat: 47.919222609724244, lng: 106.9205270142901 }}
          />
        }
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div className="w-full h-96 my-10" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default Map;
