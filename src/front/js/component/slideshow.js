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
				<img className="d-block w-100" src={novedades} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={ropaMujer} alt="Third slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={ropaHombre} alt="Third slide" />
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={nosotros} alt="Third slide" />
				<Carousel.Caption>
					<h3>Fourth slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
