import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Gracias = () => {
	const { store, actions } = useContext(Context);
	console.log(store.isLogged);

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Gracias por registrarte</h1>
			<div className="container">
				<div className="row">
					<div className="col">
						<h3>Ya formas parte de la comunidad</h3>
						<p className="lead pt-2">
							Ahora formas parte de la comunidad de SostenibleOnline. Juntos trabajamos para conseguir un
							futuro mejor para el planeta y para quienes lo habitan. Gracias por confiar en nosotros y
							nuestra causa.
						</p>
						<a href="/" className=" my-5 btn btn-lg btn-success btn-block align-center">
							<i className="fas fa-shopping-basket" /> Seguir comprando
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
