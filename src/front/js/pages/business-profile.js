import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { apiBaseURL } from "../constants";
import CardDeck from "react-bootstrap/CardDeck";
import { ProductCard } from "../component/productcard";
import handshake from "../../img/handshake.png";

export const BusinessProfile = () => {
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

	console.log("Products: " + products);

	if (products != "product not found") {
		itemList = products.map((item, key) => (
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Bienvenid@ a tu perfil en SostenibleOnline</h1>
			<div className="row">
				<div className="col">
					<div className="text-center">
						<img src={handshake} className="img-fluid" />
					</div>
					<p className="lead pt-2 my-2">
						Ya formas parte de la comunidad de SostenibleOnline. Aumenta tus venta de forma sostenible,
						acercando a más personas a los productos de calidad que cuidan de las personas y del planeta.
						Empieza subiendo tu primer producto a la tienda.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col text-center mb-3">
					<a href="/subir-producto" className=" my-4 btn btn-lg btn-secondary text-center mb-5 mr-3">
						<i className="fas fa-upload" /> Subir un producto
					</a>
					<a href="/" className=" my-4 btn btn-lg btn-danger text-center mb-5">
						<i className="fas fa-sign-out-alt" /> Cerrar Sesión
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{itemList && (
						<div>
							<h3 className="pb-3">Productos subidos</h3>
							<div className="row py-3">{itemList}</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
