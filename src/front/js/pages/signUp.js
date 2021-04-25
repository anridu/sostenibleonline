import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Col, Row, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const SignUp = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = () => {
		let user = {
			name: name,
			last_name: lastName,
			email: email,
			password: password
		};
		if (name !== "" && email !== "" && lastName !== "" && password !== "") {
			createUser(user);
		}
	};

	const createUser = user => {
		let myHeaders = new Headers();
		myHeaders.append("Accept", "application/json");
		myHeaders.append("Content-Type", "application/json");

		let url = `${apiBaseURL}/api/sign_up`;
		let raw = JSON.stringify(user);

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				history.push("/gracias");
				console.log(result);
			})

			.catch(error => console.log("error", error));
	};

	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">Registro de usuarios</h1>
			</div>

			<Form>
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Elon"
							onChange={event => setName(event.target.value)}
							required
						/>
					</Form.Group>
					<Form.Group as={Col}>
						<Form.Label>Apellidos</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							placeholder="Musk"
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
				<Button onClick={event => handleClick(event)} className="btn btn-success btn-lg mt-3">
					Registro
				</Button>
			</Form>
		</div>
	);
};
