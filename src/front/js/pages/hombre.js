import React, { useState, useEffect, useContext } from "react";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";

export const RopaHombre = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const [productsCat2, setProductsCat2] = useState([]);
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
			.then(result => setProducts(result))
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
	}, []);

	// Parece que falla el map cuando la lista de items está vacía
	let itemListCat1 = products.map((item, key) => (
		// Categoria 1
		<div className="col-md-4" key={key}>
			<ProductCard data={item} />
		</div>
	));

	let itemListCat2 = productsCat2.map((item, key) => (
		// Categoria 1
		<div className="col-md-4" key={key}>
			<ProductCard data={item} />
		</div>
	));

	return (
		<div className="container">
			{
				<div>
					Unisex
					<div className="row">{itemListCat1}</div>
					Hombre
					<div className="row">{itemListCat2}</div>
				</div>
			}
		</div>
	);
};
