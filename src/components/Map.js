/* global google */
import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'
import { compose, withProps, lifecycle, withHandlers } from "recompose"

const Map = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div className="map-container" />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 35.7596, lng: -79.0193}}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  )

export default Map
