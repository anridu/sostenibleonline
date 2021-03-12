import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import register from "../../img/register.jpg";

export const Register = () => {
	return (
		<div className="row register ">
			<div className="dark-overlay">
				<div className="col text-center text-light mb-4 ">
					<h2 className="p-3">Subscríbete a nuestra newsletter</h2>
					<p className="lead p-3">
						Quieres formar parte de una comunidad concienciada con el medio ambiente y la sostenibilidad?
						Apúntate aquí para recibir nuestra newsletter mensual con los mejores tips convertirte en un
						zero-waste warrior.
					</p>
					<a href="https://mailchimp.com/es/" className="btn btn-success">
						Regístrate aquí
					</a>
				</div>
			</div>
		</div>
	);
};
