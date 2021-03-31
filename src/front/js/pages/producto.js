import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Context from "../store/appContext";
import { apiBaseURL } from "../constants";
import PropTypes from "prop-types";
//include images into your bundle
import marca from "../../img/ropa.jpg";

//create your first component
export const Product = data => {
	const params = useParams();
	const { product_name, description, price } = data.data;
	return (
		<div>
			<div>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">{/* <img src={data ? imageUrl : "loading"} /> */}</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{data ? product_name : "loading"}</h5>

								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Elige tu talla
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										{/* hacer con un if o seleccionar una de las disponibles */}
										<a className="dropdown-item" href="#">
											s
										</a>
										<a className="dropdown-item" href="#">
											M
										</a>
										<a className="dropdown-item" href="#">
											L
										</a>
										<a className="dropdown-item" href="#">
											XL
										</a>
									</div>
								</div>
								<br />
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Cantidad
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										{/* igual que la talla o diferente?? */}
										<a className="dropdown-item" href="#">
											1
										</a>
										<a className="dropdown-item" href="#">
											2
										</a>
										<a className="dropdown-item" href="#">
											3
										</a>
										<a className="dropdown-item" href="#">
											Para mas cantidad contacta con nosotros
										</a>
									</div>
								</div>
								<h5 className="card-title">
									{data ? price : "loading"}
									euros
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row justify-content-center mt-3">
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
							<p className="card-text">{data ? description : "loading"}</p>
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
