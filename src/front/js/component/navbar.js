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
			<Link to="/">
				<Navbar.Brand className="brand-name mr-4">
					<img src={logo} className="logo" />
					SostenibleOnline
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title="Categorías" id="basic-nav-dropdown">
						<NavDropdown.Item>
							<Link to="/ropa-hombre" className="text-secondary text-decoration-none">
								Hombre
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link to="/ropa-mujer" className="text-secondary text-decoration-none">
								Mujer
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link to="/ropa-unisex" className="text-secondary text-decoration-none">
								Unisex
							</Link>
						</NavDropdown.Item>
						<NavDropdown.Item>
							<Link to="/productos" className="text-secondary text-decoration-none">
								Todos los productos
							</Link>
						</NavDropdown.Item>
					</NavDropdown>

					<Nav.Link>
						<Link to="/about" className="text-secondary text-decoration-none">
							Sobre Nosotros
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/cesta" className="text-secondary text-decoration-none">
							<i className="fas fa-shopping-cart" />{" "}
							<span className="badge badge-pill badge-success">{store.itemsShoppingCard.length}</span>
						</Link>
					</Nav.Link>
				</Nav>
				<div className="d-flex justify-content-between">
					<Link to="/login">
						<button className="btn btn-outline-success mr-3">Login</button>
					</Link>
					<Link to="/registro">
						<button className="btn btn-success mr-3">Registro</button>
					</Link>
					<Link to="/busqueda">
						<button className="btn btn-secondary mr-3">
							<i className="fas fa-search"></i> Buscar
						</button>
					</Link>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};
