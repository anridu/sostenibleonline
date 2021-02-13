import React, { useContext } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../../styles/home.scss";

export const MapContainer = () => {
	const mapStyles = {
		width: "100%",
		height: "100%"
	};
	return (
		<Map google={window.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }}>
			<Marker position={{ lat: 48.0, lng: -122.0 }} />
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyBIwzALxUPNbatRBj3Xi1Uhp0fFzwWNBkE"
})(MapContainer);
