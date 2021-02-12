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
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-success">
										Go somewhere
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
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-success">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4 text-center">
							<div className="card">
								<img className="card-img-top" src={novedades} alt="Ropa de mujer" />
								<div className="card-body">
									<h5 className="card-title">Accesorios</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										card content.
									</p>
									<a href="#" className="btn btn-success">
										Go somewhere
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
