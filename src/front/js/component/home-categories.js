import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import novedades from "../../img/novedades.png";
import ropaMujer from "../../img/ropa-mujer.jpg";
import ropaHombre from "../../img/ropa-hombre.jpg";

export const Home_Categories = () => {
	return (
		<div>
			<section id="home-categories" className="p-2">
				<div className="container text-center">
					<h2>¿Qué estás buscando?</h2>
					<p className="lead">
						Elige la categoría que prefieras y empieza a comprar tu ropa de una forma más sostenible
					</p>
					<div className="row">
						<div className="col-md-4 mb-4 text-center">
							<div className="card">
								<img className="card-img-top" src={ropaMujer} alt="Ropa de mujer" />
								<div className="card-body">
									<h5 className="card-title">Ropa de mujer</h5>
									<p className="card-text">
										Si te apasiona la moda pero buscas sostenibilidad, has encontrado tu lugar. Ropa
										y complementos para ir a la última
									</p>
									<a href="/ropa-mujer" className="btn btn-outline-success">
										Ver la colección
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4 text-center">
							<div className="card">
								<img className="card-img-top" src={ropaHombre} alt="Ropa de mujer" />
								<div className="card-body">
									<h5 className="card-title">Ropa de hombre</h5>
									<p className="card-text">
										Te presentamos nuestra colección verde: camisas, camisetas, pantalones y jerséis
										para reconvertir tu armario.
									</p>
									<a href="/ropa-hombre" className="btn btn-outline-success">
										Ver la colección
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4 text-center">
							<div className="card">
								<img className="card-img-top" src={novedades} alt="Ropa de mujer" />
								<div className="card-body">
									<h5 className="card-title">Ropa Unisex</h5>
									<p className="card-text">
										Ropa cómoda y sostenible, libre de etiquetas para que te sientas libre en tu
										cuerpo sabiendo que cuidas del planeta.
									</p>
									<a href="ropa-unisex" className="btn btn-outline-success">
										Ver la colección
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
