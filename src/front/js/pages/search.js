import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../component/productcard";
import { apiBaseURL } from "../constants";
import { Context } from "../store/appContext";
import { Form, Col, Row, DropdownButton, Button, Dropdown, InputGroup, FormControl } from "react-bootstrap";

export const Search = () => {
	// const [selectedCategory, setSelectedCategory] = useState("");
	// const [products, setProducts] = useState([]);
	// const [productsCat2, setProductsCat2] = useState([]);
	// const [productsCat3, setProductsCat3] = useState([]);
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [searchResults, setSearchResults] = useState([]);
	const [categoryId, setCategoryId] = useState("");
	const [searchText, setSearchText] = useState("");
	const [searchExecuted, setSearchExecuted] = useState("");

	let handleSearchProduct = () => {
		event.preventDefault();
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let requestOptions = {
			method: "GET",
			headers: myHeaders,
			redirect: "follow"
		};
		console.log("Getting ready to search...");

		let valCategoryId = 0;
		if (categoryId == "Hombre") valCategoryId = 1;
		if (categoryId == "Mujer") valCategoryId = 2;
		if (categoryId == "Unisex") valCategoryId = 3;

		let url = "";
		if (valCategoryId == 0) url = `${apiBaseURL}/api/search?search_text=${searchText}`;
		else url = `${apiBaseURL}/api/products/category?categoryId=${valCategoryId}&search_text=${searchText}`;

		console.log("...URL set...");

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => setSearchResults(result))
			.catch(error => console.log("error", error));

		setSearchExecuted(1);
	};

	let itemListSearch = "";
	if (searchResults != "product not found") {
		itemListSearch = searchResults.map((item, key) => (
			// Categoria 1
			<div className="col-md-4" key={key}>
				<ProductCard data={item} />
			</div>
		));
	}

	return (
		<div className="container">
			{
				<div className="py-5">
					<h1 className="display-4">Encuentra el producto que estás buscando</h1>
					<p className="lead">
						Si quieres que tu búsqueda sea más acotada puedes elegir una de las categorías disponibles y
						buscar productos solamente en ella.
					</p>

					<Form className="mt-5" onSubmit={handleSearchProduct}>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Control
									as="select"
									defaultValue="Elige..."
									onChange={event => setCategoryId(event.target.value)}
									required>
									<option>Todas las categorías</option>
									<option>Hombre</option>
									<option>Mujer</option>
									<option>Unisex</option>
								</Form.Control>
							</Form.Group>
							<Form.Group as={Col}>
								<Form.Control
									type="text"
									className="form-control"
									placeholder="Texto..."
									onChange={event => setSearchText(event.target.value)}
									required
								/>
							</Form.Group>
							<Form.Group as={Col}>
								<Button type="submit" className="btn btn-secondary btn-block">
									<i className="fas fa-search"></i> Buscar
								</Button>
							</Form.Group>
						</Form.Row>
					</Form>
					{itemListSearch.length > 0 && (
						<div className="mt-5">
							<h3>Resultado busqueda</h3>
							<div className="row py-3">{itemListSearch}</div>
						</div>
					)}

					{itemListSearch.length <= 0 && searchExecuted && (
						<div className="mt-5">
							<h3>Lo sentimos. No encontramos ningún producto con tu criterio de búsqueda.</h3>
						</div>
					)}
				</div>
			}
		</div>
	);
};
