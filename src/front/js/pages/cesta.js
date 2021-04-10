import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { ProductCard } from "../component/productcard";
import Button from "react-bootstrap/Button";

export const Cesta = () => {
	const { store, actions } = useContext(Context);

	let shoppingList = store.itemsShoppingCard.map((item, key) => (
		<div className="col-md-4" key={key}>
			<ProductCard data={item} />
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
			<div className="container">
				<div className="row">
					<div className="col">
						<p className="lead pt-2">
							Esta es tu cesta de la compra, aquí puedes ver los productos que has añadido al carrito.
						</p>
						{
							<div>
								<div className="row">{shoppingList}</div>
							</div>
						}
						<a href="/" className=" my-5 btn btn-lg btn-success btn-block align-center">
							<i className="fas fa-shopping-basket" /> Realizar pedido
						</a>

						<Button className="btn btn-success btn-lg mt-3" onClick={printProducts}>
							Console Log Lista
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
