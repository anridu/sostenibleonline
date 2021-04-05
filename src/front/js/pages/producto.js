import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Context from "../store/appContext";
import { apiBaseURL } from "../constants";
import PropTypes from "prop-types";
//include images into your bundle
import marca from "../../img/ropa.jpg";
import "../../styles/index.scss";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

//create your first component
export const Product = () => {
	const [details, setDetails] = useState();
	const params = useParams();

	// const { product_name, description, price, imageUrl } = data.data;

	useEffect(() => {
		fetch(`${apiBaseURL}/api/products/${params.id}`)
			.then(resp => resp.json())
			.then(data => {
				setDetails(data);
			});
	}, []);

	return (
		<div>
			<div>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							{<img className="img-fluid" src={details ? details.imageUrl : "loading"} />}
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title display-3 py-3">
									{details ? details.product_name : "loading"}
								</h5>

								<Dropdown className="py-4">
									<Dropdown.Toggle variant="secondary" id="dropdown-basic">
										Elige tu talla
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#">S</Dropdown.Item>
										<Dropdown.Item href="#">M</Dropdown.Item>
										<Dropdown.Item href="#">L</Dropdown.Item>
										<Dropdown.Item href="#">XL</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown>
									<Dropdown.Toggle variant="secondary" id="dropdown-basic">
										Cantidad
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#">1</Dropdown.Item>
										<Dropdown.Item href="#">2</Dropdown.Item>
										<Dropdown.Item href="#">3</Dropdown.Item>
										<Dropdown.Item href="#">Para más cantidad contacta con nosotros</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<h5 className="card-title mt-4 mb-2">
									{details ? details.price + " " : "loading"}
									euros
								</h5>
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
								<Link to="/compra">
									<Button className="btn btn-success btn-lg mt-3">Añadir a la cesta</Button>
								</Link>
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
