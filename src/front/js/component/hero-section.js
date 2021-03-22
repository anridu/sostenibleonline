import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Hero_Section = () => {
	return (
		<div>
			<div className="text-center mt-5">
				<h1 className="display-4">Apuesta por un futuro sostenible con SostenibleOnline</h1>
				<p className="lead">
					En SostenibleOnline trabajamos para poner a tu alcance las mejores prendas de ropa sostenible
					producidas en España por pequeñas empresas y sastres, vendidas por comercios de proximidad, en tu
					barrio y ahora en tu pantalla.
				</p>
			</div>
			<section id="home-icons" className="py-4 mt-2">
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
