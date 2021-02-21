import React, { Component } from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "mdbreact/dist/css/mdb.css";

export const _Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Container className="text-left">
			<Row>
				<Col md="6">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">SostenibleOnline</h5>
					<p>Estamos convencidos de que un pequeño gesto de cada uno es una gran ayuda para el planeta.</p>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Tienda</h5>
					<ul className="list-unstyled">
						<li>
							<a href="#!">Categorias</a>
						</li>
						<li>
							<a href="#!">Hombre</a>
						</li>
						<li>
							<a href="#!">Mujer</a>
						</li>
						<li>
							<a href="#!">Unisex</a>
						</li>
					</ul>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Información</h5>
					<ul className="list-unstyled">
						<li>
							<a href="#!" />
						</li>
						<li>
							<a href="#!">Contacta con nosotros</a>
						</li>
						<li>
							<a href="#!">Donde estamos</a>
						</li>
						<li>
							<a href="#!">Ayuda</a>
						</li>
					</ul>
				</Col>
				<hr className="clearfix w-100 d-md-none" />
				<Col md="2">
					<h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Además</h5>
					<ul className="list-unstyled">
						<li>
							<a href="#!">Certificados </a>
						</li>
						<li>
							<a href="#!">Colabora con nosotros</a>
						</li>
						<li>
							<a href="#!">mas ideas??</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
		<hr />
		<div className="text-center py-3">
			<ul className="list-unstyled list-inline mb-0">
				<li className="list-inline-item">
					<h5 className="mb-1">Registrate</h5>
				</li>
				<li className="list-inline-item">
					<a href="#" className="btn btn-danger btn-rounded">
						Registro
					</a>
				</li>
			</ul>
		</div>
		<hr />
		<div className="text-center">
			<ul className="list-unstyled list-inline">
				<li className="list-inline-item">
					<a className="btn-floating btn-sm btn-fb mx-1">
						<i className="fa fa-facebook"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-sm btn-tw mx-1">
						<i className="fa fa-twitter"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-sm btn-gplus mx-1">
						<i className="fa fa-google-plus"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-sm btn-li mx-1">
						<i className="fa fa-linkedin"> </i>
					</a>
				</li>
				<li className="list-inline-item">
					<a className="btn-floating btn-sm btn-dribbble mx-1">
						<i className="fa fa-dribbble"> </i>
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
