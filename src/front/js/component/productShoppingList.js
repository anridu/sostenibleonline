import React, { useState, useEffect } from "react";
import Context from "../store/appContext";
import { apiBaseURL } from "../constants";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductShoppingList = data => {
	const params = useParams();
	const { imageUrl, product_name, price, quantity, size } = data.data;

	return (
		<div>
			<div className="row mb-3">
				<div className="col-md-1"></div>
				<div className="col-md-2">
					<img className="img-fluid" src={data ? imageUrl : "loading"}></img>
				</div>
				<div className="col-md-2 text-center">
					<b>Nombre:</b> {data ? product_name : "loading"}
				</div>
				<div className="col-md-2 text-center">
					<b>Cantidad:</b> {data ? quantity : "loading"}
				</div>
				<div className="col-md-2 text-center">
					<b>Talla:</b> {data ? size : "loading"}
				</div>
				<div className="col-md-2 text-center">
					<b>Precio:</b> {data ? price : "loading"} €
				</div>
				<div className="col-md-1"></div>
			</div>
			<hr />
		</div>
	);
};

ProductShoppingList.propTypes = {
	data: PropTypes.object
};
