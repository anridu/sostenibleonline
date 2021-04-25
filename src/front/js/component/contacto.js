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
		<div className="row" id="#Contacto">
			<div className="col-md-6 p-5 mt-3">
				<MapContainer center={[41.3818, 2.1685]} zoom={13} scrollWheelZoom={false} style={{ height: 300 }}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[41.3818, 2.1685]}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
			<div className="col-md-6 p-5 mt-3">
				<h3>Contacta con nosotros</h3>
				<p className="lead">Estos son nuestros datos de contacto.</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<a href="mailto:info@sostenibleonline.com">
							<i className="fas fa-at text-dark" /> info@sostenibleonline.com
						</a>
					</li>
					<li className="list-group-item">
						<i className="fas fa-phone text-dark" /> 688 944 123{" "}
					</li>
					<li className="list-group-item">
						<i className="fas fa-home text-dark" /> Carrer dels Àngels, 6, 08020, Barcelona.
					</li>
				</ul>
			</div>
		</div>
	);
};
