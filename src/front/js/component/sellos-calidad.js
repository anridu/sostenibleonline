import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Sellos = () => {
	return (
		<div>
			<div className="text-center mt-2">
				<img src={}></img>
			</div>
			<section id="home-icons" className="py-4">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-globe fa-3x mb-2 text-dark" />
							<h3>Cuida del planeta</h3>
							<p>Porque comprando productos de proximidad reduces las emisiones de CO2. </p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-users fa-3x mb-2 text-dark" />
							<h3>Y de las personas</h3>
							<p>
								Apostamos por tiendas de proximidad, que trabajan con diseñadores, sastres y artesanos
								del país.
							</p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-paw fa-3x mb-2 text-dark" />
							<h3>Animal friendly</h3>
							<p>
								Nuestros artículos son vegan friendly y ninguno de los productos que utilizan han sido
								testados en animales.
							</p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-store fa-3x mb-2 text-dark" />
							<h3>Pro negocio local</h3>
							<p>
								Ayudamos a que los negocios locales puedan expandir sus ventas a través de una
								plataforma online.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
