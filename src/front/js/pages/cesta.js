import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { ProductShoppingList } from "../component/productShoppingList";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cesta = () => {
	const { store, actions } = useContext(Context);
	const cartTotal = store.itemsShoppingCard.reduce(
		(total, { price = 0, quantity = 0 }) => total + price * quantity,
		0
	);

	const shoppingCart = store.itemsShoppingCard.map((item, index) => (
		<div key={index}>
			<ProductShoppingList data={item} />
		</div>
	));

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Tu cesta de la compra</h1>
			<div className="row">
				<div className="col">
					<div className="mt-2">{shoppingCart}</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-1"></div>
				<div className="col-md-2 lead">
					<b>Total:</b>
				</div>
				<div className="col-md-6 "></div>
				<div className="col-md-2 text-center lead">{cartTotal} €</div>
				<div className="col-md-1"></div>
			</div>
			<div className="row">
				<div className="col">
					<Link to="/compra" className=" my-3 btn btn-lg btn-success btn-block align-center">
						<i className="fas fa-shopping-basket" /> Realizar pedido
					</Link>
				</div>
			</div>
		</div>
	);
};
