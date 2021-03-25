import React, { useState, useEffect, useContext } from "react";
import { ProductCard } from "../component/productcard";

export const ProductGalery = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [products, setProducts] = useState([]);

	useEffect(
		() => {
			var requestOptions = {
				method: "GET",
				redirect: "follow"
			};

			fetch("https://3001-teal-goose-lj4uyptd.ws-eu03.gitpod.io/api/products", requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.catch(error => console.log("error", error));
		},
		[selectedCategory]
	);

	let itemList = products.map((item, index) => {
		return (
			<div className="col-md-4" key={index}>
				<ProductCard />
			</div>
		);
	});

	return (
		<div className="container">
			<div className="row">{itemList}</div>
		</div>
	);
};
