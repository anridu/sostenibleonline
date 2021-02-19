import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/logo.png";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";

export const TopNav = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home" className="brand-name">
				<img src={logo} className="logo" />
				SostenibleOnline
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/categories">Categorias</Nav.Link>
					<Nav.Link href="/about">Sobre Nosotros</Nav.Link>
					<Nav.Link href="#Contacto">Contacto</Nav.Link>
					<Nav.Link href="#Contacto">
						<i className="fas fa-shopping-cart" />
					</Nav.Link>
					<Nav.Link href="#Contacto">
						<button className="btn btn-success">Registro</button>
					</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Búsqueda" className="mr-sm-2" />
					<Button variant="outline-success">Buscar</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
