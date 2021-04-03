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
	const { store, actions } = useContext(Context);
	const [productName, setProductName] = useState("");
	const [quantity, setQuantity] = useState("");
	const [size, setSize] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("Hombre");
	const [price, setPrice] = useState("");
	const [color, setColor] = useState("");
	const [businessId, setBusinessId] = useState("");
	const [certs, setSelectedCerts] = useState([]);
	const [files, setFiles] = useState([]);
	const [validated, setValidated] = useState(false);

	useEffect(() => {
		actions.getBusiness();
	}, []);

	function addSelectedCerts(event) {
		setSelectedCerts(Array.prototype.slice.call(event.target.selectedOptions).map(o => o.value));
	}

	const handleClick = event => {
		event.preventDefault();
		const form = event.currentTarget;
		if (form.checkValidity() === true) {
			setValidated(true);
			event.stopPropagation();

			let BuId = event.target.closest("form").querySelector("#formBusinessId").value;
			let product = {
				productName: productName,
				quantity: quantity,
				size: size,
				description: description,
				category: category,
				price: price,
				color: color,
				business_id: BuId,
				certs: certs,
				image: files[0]
			};

			createProduct(product);
		} else setValidated(false);
	};

	const createProduct = product => {
		let myHeaders = new Headers();

		let url = `${apiBaseURL}/api/products`;
		//let raw = JSON.stringify(product);

		const data = new FormData();
		for (let key in product) {
			console.log(product[key]);
			data.append(key, product[key]);
		}

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: data
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				alert("Producto agregado correctamente");
				history.push("/productos-subidos");
				console.log(result);
			});
	};

	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">Subida de productos</h1>
				<p className="lead">Formulario para subir los productos de la tienda</p>
			</div>
			<Form noValidate validated={validated} className="m-5">
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Nombre del producto</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre de Producto"
							onChange={event => setProductName(event.target.value)}
							required
						/>
						<Form.Control.Feedback type="invalid">Debes poner nombre al producto.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Categoría</Form.Label>
						<Form.Control as="select" onChange={event => setCategory(event.target.value)}>
							<option value="Hombre">Hombre</option>
							<option value="Mujer">Mujer</option>
							<option value="Unisex">Unisex</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group>
						<Form.Label>Imagen del producto</Form.Label>
						<Form.File
							id="custom-file-translate-html"
							label="Carga la imagen tu producto"
							data-browse="Examinar"
							onChange={event => setFiles(event.target.files)}
							custom
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formBusinessId">
						<Form.Label>Negocio</Form.Label>
						<Form.Control
							as="select"
							defaultValue={store.business[0]}
							onChange={event => setBusinessId(event.target.value)}>
							{store.business.map((bs, key) => (
								<option value={bs.id} key={key}>
									{bs.comercialName}
								</option>
							))}
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Cantidad</Form.Label>
						<Form.Control
							type="text"
							placeholder="Cantidad de productos(Stok)"
							onChange={event => setQuantity(event.target.value)}
						/>
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Label>Talla</Form.Label>
						<Form.Control type="text" placeholder="Talla" onChange={event => setSize(event.target.value)} />
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Label>Precio por unidad</Form.Label>
						<Form.Control
							type="text"
							placeholder="Precio por unidad"
							onChange={event => setPrice(event.target.value)}
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Color</Form.Label>
						<Form.Control
							type="text"
							placeholder="Color"
							onChange={event => setColor(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.Label>Descripción</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Descripción"
						onChange={event => setDescription(event.target.value)}
					/>
				</Form.Group>
				<Form.Control as="select" multiple onChange={event => addSelectedCerts(event)}>
					<option>BIO Cotton</option>
					<option>Fairtrade</option>
					<option>STeP by OEKO-TEX®</option>
					<option>PETA Approved Vegan</option>
				</Form.Control>

				<Button onClick={handleClick} className="btn btn-success btn-lg">
					Subir producto
				</Button>
			</Form>
		</div>
	);
};
