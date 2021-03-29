import React, { useState, useEffect, useContext } from "react";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";

export const ProductGalery = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.getProducts()
		let url = `${apiBaseURL}/api/products`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setProducts(result))
			.catch(error => console.log("error", error));
	}, []);

	let itemList = products.map((item, key) => (
		<div className="col-md-4" key={key}>
			<ProductCard data={item} />
		</div>
	));

	return <div className="container">{<div className="row">{itemList}</div>}</div>;
};
