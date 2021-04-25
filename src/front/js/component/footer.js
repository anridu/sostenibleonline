import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import { Link } from "react-router-dom";

export const _Footer = () => (
	<footer className="footer mt-auto py-3 text-center mt-5">
		<Container fluid className="text-left">
			<Row>
				<Col md="6" className="p-4">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">SostenibleOnline</h5>
					<p>Estamos convencidos de que un pequeño gesto de cada uno es una gran ayuda para el planeta.</p>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Tienda</h5>
					<ul className="list-unstyled">
						<li>
							<Link to="/ropa-hombre">Hombre</Link>
						</li>
						<li>
							<Link to="/ropa-mujer">Mujer</Link>
						</li>
						<li>
							<Link to="/ropa-unisex">Unisex</Link>
						</li>
					</ul>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Información</h5>
					<ul className="list-unstyled">
						<li>
							<Link to="#!" />
						</li>
						<li>
							<Link to="mailto:info@sostenibleonline.com">Contacta con nosotros</Link>
						</li>
						<li>
							<Link to="#!">Donde estamos</Link>
						</li>
						<li>
							<Link to="#!">Ayuda</Link>
						</li>
					</ul>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Además</h5>
					<ul className="list-unstyled">
						<li>
							<Link to="#!">Certificados </Link>
						</li>
						<li>
							<Link to="#!">Colabora con nosotros</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
		<hr />
		<div className="text-center py-3">
			<ul className="list-unstyled list-inline mb-0">
				<li className="list-inline-item">
					<h5 className="p-2">Sé parte del cambio</h5>
				</li>
				<li className="list-inline-item">
					<a href="/registro" className="btn btn-outline-success btn-rounded">
						Regístrate ahora
					</a>
				</li>
			</ul>
		</div>
		<hr />
		<div className="text-center">
			<ul className="list-unstyled list-inline">
				<li className="list-inline-item">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.instagram.com"
						className="btn-floating btn-sm text-secondary btn-li mx-1">
						<i className="fab fa-instagram fa-2x" />
					</a>
				</li>
				<li className="list-inline-item">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.facebook.com"
						className="btn-floating btn-sm text-secondary btn-li mx-1">
						<i className="fab fa-facebook-square fa-2x" />
					</a>
				</li>
				<li className="list-inline-item">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.twitter.com"
						className="btn-floating btn-sm text-secondary btn-li mx-1">
						<i className="fab fa-twitter fa-2x" />
					</a>
				</li>
			</ul>
		</div>
		<div className="footer-copyright text-center">
			<Container fluid>
				&copy; {new Date().getFullYear()} Copyright:{" "}
				<a href="https://www.sostenibleonline.com"> sostenibleonline.com </a>
			</Container>
		</div>
	</footer>
);
