import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import unisex from "../../img/slide-unisex.jpg";
import ropaMujer from "../../img/slide-mujer.jpg";
import ropaHombre from "../../img/slide-hombre.jpg";
import nosotros from "../../img/slide-nosotros.jpg";
import "../../styles/home.scss";
import Carousel from "react-bootstrap/Carousel";

export const Slideshow = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={unisex} alt="Novedades" />
				<Carousel.Caption>
					<h3 className="display-4">Para todxs</h3>
					<p className="lead">Te presentamos nuestra colección de ropa unisex sostenible.</p>
					<a href="/ropa-unisex">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={ropaMujer} alt="Third slide" />

				<Carousel.Caption>
					<h3 className="display-4">Mujer</h3>
					<p className="lead">
						Descubre nuestra colección de ropa de mujer. Marcas de calidad y con un compromiso con la
						sostenibilidad.
					</p>
					<a href="/ropa-mujer">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={ropaHombre} alt="Third slide" />
				<Carousel.Caption>
					<h3 className="display-4">Hombre</h3>
					<p className="lead">Ropa diseñada para ir a la última y respetar el planeta al mismo tiempo.</p>
					<a href="/ropa-hombre">
						<button className="btn btn-success">Ver colección</button>
					</a>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100 dark-overlay" src={nosotros} alt="Third slide" />
				<Carousel.Caption>
					<h3 className="display-4">Sostenible</h3>
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
