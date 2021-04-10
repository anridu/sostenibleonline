import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { apiBaseURL } from "../constants";
import PropTypes from "prop-types";
import marca from "../../img/ropa.jpg";
import "../../styles/index.scss";
import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

//create your first component
export const Product = () => {
	const { store, actions } = useContext(Context);
	const [details, setDetails] = useState();
	const params = useParams();
	const history = useHistory();
	const [size, setSize] = useState("");
	const [quantity, setQuantity] = useState("");

	// const { product_name, description, price, imageUrl } = data.data;

	const addProduct = event => {
		event.preventDefault();
		const product = { ...details, size, quantity };
		actions.addProductToShoppingCard(product);
		console.log("Producto:" + product);
		console.log("Productos en cesta: ");
		console.log(store.itemsShoppingCard);
	};

	const checkout = event => {
		event.preventDefault();
		history.push("/cesta");
	};

	useEffect(() => {
		fetch(`${apiBaseURL}/api/products/${params.id}`)
			.then(resp => resp.json())
			.then(data => {
				setDetails(data);
			});
	}, []);

	return (
		<div>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						{<img className="img-fluid" src={details ? details.imageUrl : "loading"} />}
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title display-3 py-3">{details ? details.product_name : "loading"}</h5>
							<h5 className="card-title mt-4 mb-2">
								Precio: <b>{details ? details.price + " " : "loading"}</b> €
							</h5>

							<Form className="mt-3" onSubmit={addProduct}>
								<Form.Row>
									<Form.Group as={Col}>
										<Form.Label>Talla:</Form.Label>
										<Form.Control
											as="select"
											defaultValue="Elige..."
											onChange={event => setSize(event.target.value)}>
											<option>Elige...</option>
											<option>XS</option>
											<option>S</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>
								<Form.Row>
									<Form.Group as={Col} controlId="exampleForm.ControlSelect1">
										<Form.Label>Cantidad</Form.Label>
										<Form.Control
											as="select"
											defaultValue="1"
											onChange={event => setQuantity(event.target.value)}>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option disabled>Para más cantidad contacta con nosotros</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>
								<Button type="submit" className="btn btn-dark btn-lg">
									Añadir al carrito de la compra
								</Button>
							</Form>

							<Button className="btn btn-light btn-lg mt-3" onClick={checkout}>
								Tramitar el pedido
							</Button>

							<div className="row  mt-3">
								<div className="col-md-8">
									<div className="card text-center border-info">
										<div className="card-header">
											<ul className="nav nav-tabs card-header-tabs">
												<li className="nav-item">
													<a className="nav-link" href="#">
														Descripción
													</a>
												</li>
											</ul>
										</div>
										<div className="card-body">
											<p className="card-text">{details ? details.description : "loading"}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	data: PropTypes.object
};
