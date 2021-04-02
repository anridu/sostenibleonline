import React, { useState, useEffect, useContext } from "react";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";

export const ProductGalery = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [productsCat2, setProductsCat2] = useState([]);
	const [productsCat3, setProductsCat3] = useState([]);
	const { store, actions } = useContext(Context);

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

	// Parece que falla el map cuando la lista de items está vacía
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

	// Parece que falla el map cuando la lista de items está vacía
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
				<div>
					<h3>Hombre</h3>
					<div className="row">{itemListCat1}</div>
					<h3>Mujer</h3>
					<div className="row">{itemListCat2}</div>
					<h3>Unisex</h3>
					<div className="row">{itemListCat3}</div>
				</div>
			}
		</div>
	);
};
