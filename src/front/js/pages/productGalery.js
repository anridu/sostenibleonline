import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { Form, Col, Row, DropdownButton, Button, Dropdown, InputGroup, FormControl } from "react-bootstrap";

export const ProductGalery = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [productsCat2, setProductsCat2] = useState([]);
	const [productsCat3, setProductsCat3] = useState([]);
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		// actions.getProducts()
		let url = `${apiBaseURL}/api/products/category/3`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setProductsCat3(result))
			.catch(error => console.log("error", error));

		// actions.getProducts()
		url = `${apiBaseURL}/api/products/category/2`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setProductsCat2(result))
			.catch(error => console.log("error", error));

		// actions.getProducts()
		url = `${apiBaseURL}/api/products/category/1`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setProducts(result))
			.catch(error => console.log("error", error));
	}, []);

	let itemListCat1 = "";
	if (products != "product not found") {
		itemListCat1 = products.map((item, key) => (
			// Categoria 1
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	let itemListCat2 = "";
	if (productsCat2 != "product not found") {
		itemListCat2 = productsCat2.map((item, key) => (
			// Categoria 2
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	let itemListCat3 = "";
	if (productsCat3 != "product not found") {
		itemListCat3 = productsCat3.map((item, key) => (
			// Categoria 3
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	return (
		<div className="container">
			{
				<div className="py-5">
					<h1 className="display-4">Productos sostenibles, gente comprometida</h1>
					<p className="lead">
						En esta página se muestran todos los productos de SostenibleOnline para que encuentres la prenda
						perfecta, para verte bien, sentirte mejor y respetar el planeta. Porque no hay un planeta B.
					</p>

					<h3>Ropa de hombre</h3>
					<div className="row py-3">{itemListCat1}</div>
					<h3>Ropa de mujer</h3>
					<div className="row py-3">{itemListCat2}</div>
					<h3>Ropa unisex</h3>
					<div className="row py-3">{itemListCat3}</div>
				</div>
			}
		</div>
	);
};
