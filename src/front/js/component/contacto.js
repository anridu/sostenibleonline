import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export const Contact = () => {
	return (
		<div className="row">
			<div className="col-md-6 p-3 ">
				<MapContainer center={[41.3818, 2.1685]} zoom={13} scrollWheelZoom={false} style={{ height: 300 }}>
					<TileLayer
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[41.3818, 2.1685]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
			<div className="col-md-6 py-3">
				<h4>Contacta con nosotros</h4>
				<p className="lead">Estos son nuestros datos de contacto.</p>
				<p>
					<i className="fas fa-at" /> info@sostenibleonline.com
				</p>
				<p>
					<i className="fas fa-phone" /> 688 944 123{" "}
				</p>
				<p>
					<i className="fas fa-home" /> Dirección de nuestras oficinas
				</p>
			</div>
		</div>
	);
};
