import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
import { Col, Row, Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

export const RegistroMarca = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [commercialName, setCommercialName] = useState("");
	const [taxName, setTaxName] = useState("");
	const [logo, setLogo] = useState();
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [region, setRegion] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [description, setDescription] = useState("");
	const [check, setCheck] = useState([]);
	const [certs, setCerts] = useState();
	// Create CIF Hook / Field

	const handleSubmit = () => {
		event.preventDefault();
		let business = {
			name: name,
			last_name: lastName,
			email: email,
			password: password,
			comercial_name: commercialName,
			tax_name: taxName,
			// logo: logo,
			address: address,
			city: city,
			region: region,
			zip_code: zipCode,
			description: description
			// check: check,
			// certs: certs
		};

		if (
			name !== "" &&
			email !== "" &&
			lastName !== "" &&
			password !== "" &&
			commercialName !== "" &&
			taxName !== "" &&
			address !== "" &&
			city !== "" &&
			region !== "" &&
			zipCode !== ""
		) {
			createBusiness(business);
		}
	};

	const createBusiness = business => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let url = `${apiBaseURL}/api/businesses`;
		let raw = JSON.stringify(business);

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				actions.setIsLogged(true);
				localStorage.setItem("token", result.access_token);
				console.log(result);
				history.push("/perfil-empresa");
			});
	};

	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">Registro para marcas y tiendas</h1>
				<p className="lead">
					Esta página es para que des de alta tu negocio en la plataforma de SostenibleOnline y empieces a
					vender también tus productos online.
				</p>
			</div>

			<Form onSubmit={handleSubmit}>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Nombre"
							onChange={event => setName(event.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Apellidos</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Apellidos"
							onChange={event => setLastName(event.target.value)}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Correo Electrónico</Form.Label>
						<Form.Control
							type="email"
							className="form-control"
							placeholder="Email"
							onChange={event => setEmail(event.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control
							type="password"
							className="form-control"
							placeholder="******"
							onChange={event => setPassword(event.target.value)}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Nombre comercial</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							value={commercialName}
							placeholder="Nombre de la marca/tienda"
							onChange={event => setCommercialName(event.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Nombre fiscal</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Tu empresa"
							onChange={event => setTaxName(event.target.value)}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Subir logo</Form.Label>
						<Form.Control
							type="file"
							className="form-control-file"
							placeholder="Sube tu logo"
							onChange={event => setLogo(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Dirección</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Calle, número, puerta."
							onChange={event => setAddress(event.target.value)}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Ciudad</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Ciudad"
							onChange={event => setCity(event.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Provincia</Form.Label>
						<Form.Control
							as="select"
							defaultValue="Eige..."
							onChange={event => setRegion(event.target.value)}>
							<option>Elige...</option>
							<option>Albacete</option>
							<option>Alicante</option>
							<option>Almeria</option>
							<option>Álava</option>
							<option>Asturias</option>
							<option>Ávila</option>
							<option>Badajoz</option>
							<option>Balears</option>
							<option>Barcelona</option>
							<option>Bizkaia</option>
							<option>Burgos</option>
							<option>Cáceres</option>
							<option>Cádiz</option>
							<option>Cantabria</option>
							<option>Castellón</option>
							<option>Ciudad Real</option>
							<option>Córdoba</option>
							<option>Coruña, A</option>
							<option>Cuenca</option>
							<option>Gipuzkoa</option>
							<option>Girona</option>
							<option>Granada</option>
							<option>Guadalajara</option>
							<option>Huelva</option>
							<option>Huesca</option>
							<option>Jaén</option>
							<option>León</option>
							<option>Lleida</option>
							<option>Lugo</option>
							<option>Madrid</option>
							<option>Málaga</option>
							<option>Murcia</option>
							<option>Navarra</option>
							<option>Ourense</option>
							<option>Palencia</option>
							<option>Palmas, Las</option>
							<option>Pontevedra</option>
							<option>Rioja, La</option>
							<option>Salamanca</option>
							<option>Santa Cruz de Tenerife</option>
							<option>Segovia</option>
							<option>Sevilla</option>
							<option>Soria</option>
							<option>Tarragona</option>
							<option>Teruel</option>
							<option>Toledo</option>
							<option>Valencia</option>
							<option>Valladolid</option>
							<option>Zamora</option>
							<option>Zaragoza</option>
							<option>Ceuta</option>
							<option>Melilla</option>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Código postal</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Código postal"
							onChange={event => setZipCode(event.target.value)}
							required
						/>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Descripción de tu empresa/marca</Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							className="form-control"
							onChange={event => setDescription(event.target.value)}
						/>
					</Form.Group>
				</Form.Row>
				<Button type="submit" className="btn btn-success btn-lg">
					Registro
				</Button>
			</Form>
		</div>
	);
};
