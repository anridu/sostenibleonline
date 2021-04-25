import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { apiBaseURL } from "../constants";
import CardDeck from "react-bootstrap/CardDeck";
import { ProductCard } from "../component/productcard";

export const BusinessProfile2 = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const { store, actions } = useContext(Context);
	let itemList = "";
	console.log(store.isLogged);

	useEffect(() => {
		// actions.getProducts()
		let url = `${apiBaseURL}/api/products/business`;

		var myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

		var requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				setProducts(result);
			})

			.catch(error => console.log("error", error));
	}, []);

	if (products != "product not found") {
		itemList = products.map((item, key) => (
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Aumenta tus ventas con SostenibleOnline</h1>
			<div className="row">
				<div className="col">
					<p className="lead pt-2 my-2">
						Subiendo tus productos a nuestra plataforma podrás llegar a más clientes, asegúrate de añadir
						una foto del producto y una buena descripción para que más clientes puedan disfrutar de tus
						diseños. Te damos la bienvenida a la venta online sostenible.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col text-center mb-3">
					<a href="/subir-producto" className=" my-4 btn btn-lg btn-outline-success text-center mb-5 mr-3">
						<i className="fas fa-upload" /> Subir un producto
					</a>
					<a href="/" className=" my-4 btn btn-lg btn-outline-secondary text-center mb-5">
						<i className="fas fa-home" /> Ir a la página de inicio
					</a>
				</div>
			</div>
			<div className="row">
				{itemList && (
					<div>
						<h3 className="pb-3">Productos subidos</h3>
						<div className="row py-3">{itemList}</div>
					</div>
				)}
			</div>
		</div>
	);
};
