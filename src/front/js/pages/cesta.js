import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { ProductShoppingList } from "../component/productShoppingList";
import { Button, Table } from "react-bootstrap";

export const Cesta = () => {
	const { store, actions } = useContext(Context);

	let shoppingList = store.itemsShoppingCard.map((item, key) => (
		<div key={key}>
			<ProductShoppingList data={item} />
		</div>
	));

	const printProducts = event => {
		event.preventDefault();
		console.log("Productos en cesta!!!!!: ");
		console.log(store.itemsShoppingCard);
	};

	console.log(store.itemsShoppingCard);

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Tu cesta de la compra</h1>
			<div className="row">
				<div className="col">
					<div className="mt-2">{shoppingList}</div>
					<a href="/" className=" my-5 btn btn-lg btn-success btn-block align-center">
						<i className="fas fa-shopping-basket" /> Realizar pedido
					</a>

					<Button className="btn btn-success btn-lg mt-3" onClick={printProducts}>
						Console Log Lista
					</Button>
				</div>
			</div>
		</div>
	);
};
