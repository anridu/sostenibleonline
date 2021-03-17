import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { apiBaseURL } from "../constants";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Jumbotron from "react-bootstrap/Jumbotron";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
import { Col, Row, Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const ProductForm = () => {
	const history = useHistory();
	const [productName, setProductName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [size, setSize] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");

	const handleClick = () => {
		event.preventDefault();
		let product = {
			product_name: productName,
			quantity: quantity,
			size: size,
			description: description,
			category: category,
			price: price,
			color: color
		};

		if (
			productName !== "" &&
			quantity !== "" &&
			size !== "" &&
			description !== "" &&
			price !== "" &&
			color !== ""
		) {
			createProduct(product);
		}
	};
	const createProduct = product => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let url = `${apiBaseURL}api/products`;
		let raw = JSON.stringify(product);
		console.log(raw);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				history.push("/");
				console.log(result);
			});
	};

	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">Subida de productos</h1>
				<p className="lead">Formulario para subir los productos de la tienda</p>
			</div>
			<Form className="m-5">
				<Form.Row>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Nombre del producto</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre de Producto"
							onChange={event => setProductName(event.target.value)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Categoría</Form.Label>
						<Form.Control as="select" onChange={event => setCategory(event.target.value)}>
							<option>Hombre</option>
							<option>Mujer</option>
							<option>Unisex</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.File
						id="custom-file-translate-html"
						label="Carga la imagen tu producto"
						data-browse="Examinar"
						custom
					/>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Cantidad</Form.Label>
						<Form.Control
							type="text"
							placeholder="Cantidad de productos(Stok)"
							onChange={event => setQuantity(event.target.value)}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Talla</Form.Label>
						<Form.Control type="text" placeholder="Talla" onChange={event => setSize(event.target.value)} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Precio por unidad</Form.Label>
						<Form.Control
							type="text"
							placeholder="Precio por unidad"
							onChange={event => setPrice(event.target.value)}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Color</Form.Label>
						<Form.Control
							type="text"
							placeholder="Color"
							onChange={event => setColor(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Descripción</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Descripción"
						onChange={event => setDescription(event.target.value)}
					/>
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<p>¿De qué sellos de sostenibilidad dispone el producto?</p>
					<Form.Check type="checkbox" label="EU Ecolabel" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="BIO Cotton" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Fairtrade" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="STeP by OEKO-TEX®" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="PETA Approved Vegan" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="GLOBAL ORGANIC TEXTILE STANDARD" />
				</Form.Group>

				<Button onClick={event => handleClick(event)} className="btn btn-success btn-lg">
					Subir producto
				</Button>
			</Form>
		</div>
	);
};
