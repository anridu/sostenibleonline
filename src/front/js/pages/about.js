import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Team from "../../img/team.png";
import Sonia from "../../img/Sonia.jpg";
import Angel from "../../img/angel.png";
import Samuel from "../../img/Samuel.jpg";
import nosotros from "../../img/nosotros.jpg";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="display-4 py-4 text-center">Sobre nosotros</h1>
			<div className="container">
				<div className="row">
					<div className="col-md-6 py-3">
						<h3>Nuestro proyecto</h3>
						<p>
							SostenibleOnline ofrece una oportunidad única a negocios locales. Tiendas y pequeños
							productores de ropa comprometida con la sostenibilidad pueden ampliar sus horizontes y
							seguir construyendo su sueño aún en tiempos de pandemia gracias a la venta online.
						</p>
						<p>
							SostenibleOnline nace para revolucionar el mundo de la moda ayudando a los pequeños
							comercios a aumentar su visibilidad online y acercando a la gente a los productos
							sostenibles, con sellos de garantía aprovados. Nuestra empresa y nuestro productos están
							comprometidos con la sostenibilidad en todos sus niveles, a nivel ecológico pero también
							económico y social.
						</p>
						<p>
							Sostenible online es un marketPlace, que a diferencia de otros como Amazon, ofrece solamente
							productos sostenibles.
						</p>
					</div>
					<div className="col-md-6 py-3">
						<img src={Team} className="img-fluid" />
					</div>
				</div>
			</div>
			<div className="container py-3 mt-5">
				<div className="row">
					<div className="col">
						<h3>Nuestro equipo</h3>
						<p>
							Somos un equipo comprometido con la sostenibilidad. Queremos aportar nuestro granito de
							arena a hacer de este mundo un lugar mejor y lo hacemos apoyando al comercio local, los
							productos hechos en España y las empresas con fuertes valores en sostenibilidad.
						</p>
					</div>
				</div>
			</div>
			<div id="team" className="team container p-3">
				<div className="row">
					<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
						<div className="member">
							<div className="member-img">
								<img width={900} height={500} src={Angel} className="img-fluid" alt="" />
								<div className="social">
									<a href="">
										<i className="fab fa-twitter" />
									</a>
									<a href="">
										<i className="fab fa-facebook" />
									</a>
									<a href="">
										<i className="fab fa-instagram" />
									</a>
									<a href="">
										<i className="fab fa-linkedin" />
									</a>
								</div>
							</div>
							<div className="member-info">
								<h4>Ángel Rivero</h4>
								<span>Marketing manager</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
						<div className="member">
							<div className="member-img">
								<img src={Samuel} className="img-fluid" alt="" />
								<div className="social">
									<a href="">
										<i className="fab fa-twitter" />
									</a>
									<a href="">
										<i className="fab fa-facebook" />
									</a>
									<a href="">
										<i className="fab fa-instagram" />
									</a>
									<a href="">
										<i className="fab fa-linkedin" />
									</a>
								</div>
							</div>
							<div className="member-info">
								<h4>Samuel Hernández</h4>
								<span>Product Manager</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
						<div className="member">
							<div className="member-img">
								<img src={Sonia} className="img-fluid" alt="" />
								<div className="social">
									<a href="https://twitter.com/home">
										<i className="fab fa-twitter" />
									</a>
									<a href="https://www.facebook.com/schavesroca/">
										<i className="fab fa-facebook" />
									</a>
									<a href="https://www.instagram.com/sonia_scr/">
										<i className="fab fa-instagram" />
									</a>
									<a href="https://www.linkedin.com/in/chavesonia/">
										<i className="fab fa-linkedin" />
									</a>
								</div>
							</div>
							<div className="member-info">
								<h4>Sònia Chaves</h4>
								<span>Sales manager</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container p-3 py-5">
				<div className="row">
					<div className="col-md-6">
						<img src={nosotros} className="img-fluid" />
					</div>
					<div className="col-md-6">
						<h3>Nuestro compromiso</h3>
						<p>
							En SostenibleOnline apostamos por un consumo de ropa más consciente y también por una
							producción consciente y de proximidad, donde sea más importante la calidad que la cantidad.
							Las prendas que encontrarás en SostenibleOnline éstan pensadas, diseñadas y elaboradas
							íntegramente en España, la mayoría de las veces de forma artesanal y siempre de forma
							sostenible. Se trata de prendas únicas, hechas con cuidado y mimo, utilizando las mejores
							materias primas para que su calidad y durabilidad sean excepcionales.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
