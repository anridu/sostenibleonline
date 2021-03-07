import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import novedades from "../../img/novedades.png";
import ropaMujer from "../../img/ropa-mujer.jpg";
import ropaHombre from "../../img/ropa-hombre.jpg";
import nosotros from "../../img/nosotros.jpg";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

export const Slideshow = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={novedades} alt="Novedades" />
				<Carousel.Caption>
					<h3 className="display-4">Ropa para todos, ecológica</h3>
					<p className="lead">
						Te presentamos nuestra colección de ropa unisex sostenible. Con los estándares de calidad y
						sostenibilidad que te representan.
					</p>
					<a href="/ropa-unisex">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={ropaMujer} alt="Third slide" />

				<Carousel.Caption>
					<h3 className="display-4">Ropa de mujer</h3>
					<p className="lead">
						Descubre nuestra colección de ropa para estar a la última. Marcas de calidad y con un compromiso
						claro con la sostenibilidad.
					</p>
					<a href="/ropa-mujer">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={ropaHombre} alt="Third slide" />
				<Carousel.Caption>
					<h3 className="display-4">Ropa para hombre</h3>
					<p className="lead">
						Descubre nuestra colección de ropa para estar a la última. Marcas de calidad y con un compromiso
						claro con la sostenibilidad..
					</p>
					<a href="/ropa-hombre">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={nosotros} alt="Third slide" />
				<Carousel.Caption>
					<h3 className="display-4">Nuestro compromiso con la sostenibilidad</h3>
					<p className="lead">
						Estamos comprometidos con la sostenibilidad a todos sus niveles: ecológico, económico y social.
					</p>
					<a href="/about">
						<button className="btn btn-secondary">Leer más</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
