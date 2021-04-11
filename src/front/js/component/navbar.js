import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/logo.png";
import { Navbar, Nav, Button, Form, FormControl, Badge, FromCheck, Col, Row, NavDropdown } from "react-bootstrap";

export const TopNav = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/" className="brand-name mr-4">
				<img src={logo} className="logo" />
				SostenibleOnline
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="Categorías" id="basic-nav-dropdown">
						<NavDropdown.Item href="/ropa-hombre">Hombre</NavDropdown.Item>
						<NavDropdown.Item href="/ropa-mujer">Mujer</NavDropdown.Item>
						<NavDropdown.Item href="/ropa-unisex">Unisex</NavDropdown.Item>
						<NavDropdown.Item href="/productos">Todos los productos</NavDropdown.Item>
					</NavDropdown>

					<Nav.Link href="/about">Sobre Nosotros</Nav.Link>
					<Nav.Link href="/cesta">
						<i className="fas fa-shopping-cart" />{" "}
						<span className="badge badge-pill badge-success">{store.itemsShoppingCard.length}</span>
					</Nav.Link>
				</Nav>
				<div className="d-flex justify-content-between">
					<Link to="/login">
						<button className="btn btn-outline-success mr-3">Login</button>
					</Link>
					<Link to="/registro">
						<button className="btn btn-success mr-3">Registro</button>
					</Link>
					<Form inline>
						<FormControl type="text" placeholder="Búsqueda" className="mr-sm-2" />
						<Button variant="outline-success">Buscar</Button>
					</Form>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};
