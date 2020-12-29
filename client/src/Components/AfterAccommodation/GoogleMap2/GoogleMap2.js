import React, { PureComponent } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./GoogleMap2.css";
export class MapContainer2 extends PureComponent {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    mapCenter: {
      lat: 49.2827291,
      lng: -123.1207375,
    },
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }
    navigator.geolocation.getCurrentPosition(position => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({
        mapCenter: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }
  componentDidUpdate(prevProp, prevState) {}

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const containerStyle = {
      width: "90%",
      height: "100%",
    };
    const style = {
      display: "inlineBlock",
      position: "absolute",
      marginLeft: "3em",
      marginBottom: "2em",
    };
    return (
      <Map
        // className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        containerStyle={containerStyle}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
        style={style}
        center={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Current location"}
          position={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
const LoadingContainer = props => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: "AIzaSyC9eJc1bluUiVpkZvmdq - O6NTR2A5T2TeI",
  LoadingContainer: LoadingContainer,
})(MapContainer2);
