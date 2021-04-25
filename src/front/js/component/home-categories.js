import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import novedades from "../../img/novedades.png";
import ropaMujer from "../../img/ropa-mujer.jpg";
import ropaHombre from "../../img/ropa-hombre.jpg";
import { Link } from "react-router-dom";

export const Home_Categories = () => {
	return (
		<div>
			<section id="home-categories" className="p-2 my-3">
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
									<Link to="/ropa-mujer" className="btn btn-outline-success">
										Ver la colección
									</Link>
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
									<Link to="/ropa-hombre" className="btn btn-outline-success">
										Ver la colección
									</Link>
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
									<Link to="ropa-unisex" className="btn btn-outline-success">
										Ver la colección
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
