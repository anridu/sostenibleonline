import React, { useState, useEffect, useContext } from "react";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";

export const RopaMujer = () => {
	const [products, setProducts] = useState([]);
	const { store, actions } = useContext(Context);
	let itemListCat2 = "";

	useEffect(() => {
		// actions.getProducts()
		let url = `${apiBaseURL}/api/products/category/2`;

		var requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setProducts(result))
			.catch(error => console.log("error", error));
	}, []);

	if (products != "product not found") {
		itemListCat2 = products.map((item, key) => (
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}
	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Ropa de mujer</h1>
			<p className="lead">
				En esta página encontrarás una selección de ropa para mujer, fabricada y diseñada en España. Pantalones,
				sudaderas, camisetas o camisas, faldas y vestidos, entre muchas otras prendas para que te sientas bien
				en tu cuerpo al mismo tiempo que cuidas del planeta.
			</p>
			<p>
				Las prendas que encontrarás en SostenibleOnline se han diseñado pensando en tu comodidad. Es ropa
				duradera y de buena calidad, con la que te verás elegante y ayudarás a conservar el planeta. Porque no
				hay un planeta B.
			</p>
			<p>
				Todos nuestros productos disponen de los sellos de calidad y sostenibilidad más exigentes. Trabajamos
				con algodón orgánico, hilo reciclado y materias primeras de alta calidad.
			</p>
			{
				<div>
					<div className="row">{itemListCat2}</div>
				</div>
			}
		</div>
	);
};
