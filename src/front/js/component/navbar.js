import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import logo from "../../img/logo.png";
import { Search } from "../component/searchBar";
import { Navbar, Nav, Button, Form, FormControl, Badge, FromCheck, Col, Row, NavDropdown } from "react-bootstrap";

export const TopNav = () => {
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
					</NavDropdown>
					<Nav.Link href="/about">Sobre Nosotros</Nav.Link>
					<Nav.Link href="/checkout">
						<i className="fas fa-shopping-cart" />
					</Nav.Link>
				</Nav>
				<div className="d-flex justify-content-between">
					<Link to="/registro">
						<button className="btn btn-success mr-3">Registro</button>
					</Link>
					<Form inline>
						<Search />
						<Button variant="outline-success" />
					</Form>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};
