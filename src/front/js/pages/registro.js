import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import RegistroUsuario from "../../img/registro-usuario.png";
import RegistroMarca from "../../img/registro-marca.png";

export const Registro = () => {
	return (
		<div className="container py-4">
			<h1 className="display-4 text-center mt-3 mb-5">¿Cómo quieres registrarte?</h1>
			<div className="row">
				<div className="col-md-6 py-4 bg-light">
					<h3 className="text-center">Comprador sostenible</h3>
					<img src={RegistroUsuario} className="img-fluid mt-3" />
					<p className="lead">
						Sí, quiero ser un comprador sostenible, comprometido con la sostenibilidad del planeta. Ayudando
						a los negocios locales y a las personas, cuidando de mi planeta y su salud ambiental, siendo
						respetuoso con todxs formando parte del cambio.
					</p>
					<Link to="/sign-up" className="btn btn-outline-success btn-block mt-3">
						Quiero registrarme como usuario
					</Link>
				</div>
				<div className="col-md-6 py-4">
					<h3 className="text-center">Empresa sostenible</h3>
					<img src={RegistroMarca} className="img-fluid mt-3" />
					<p className="lead">
						Sí, quiero aumentar la visibilidad de mis productos y las ventas de mi tienda, llegando a más
						clientes que se preocupan por la sostenibilidad y el medioambiente. Quiero que mi negocio crezca
						trabajando con los mejores sellos de garantía sostenible.
					</p>
					<Link to="/registro-marca" className="btn btn-outline-secondary btn-block mt-3 align-center">
						Quiero formar parte de SostenibleOnline
					</Link>
				</div>
			</div>
		</div>
	);
};
