import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <div>
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 47.91923333029237, lng: 106.92052373405397 }}
      />
      ;
      <Marker position={{ lat: 47.91923333029237, lng: 106.92052373405397 }} />
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (
    <div className="w-full h-96 py-4">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC17oIFM914dM--u-hJjFpNMcfQ-HiaNkk`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      ></WrappedMap>
    </div>
  );
}
