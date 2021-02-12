import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Contact = () => {
	return (
		<div className="row">
			<div className="col-md-6">
				<p>Map will load here</p>
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
