import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { StaticGoogleMap, Marker, Path } from "react-static-google-map";

export const Contact = () => {
	return (
		<div className="row">
			<div className="col-md-6">
				<StaticGoogleMap
					size="600x600"
					className="img-fluid"
					apiKey="AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp">
					<Marker location="6.4488387,3.5496361" color="blue" label="P" />
				</StaticGoogleMap>
			</div>
			<div className="col-md-6">
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
