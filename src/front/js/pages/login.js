import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiBaseURL } from "../constants";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();

		validateForm();
	}

	// const handleSubmit = event => {
	// 	let user = {
	// 		email: email,
	// 		password: password
	// 	};
	// 	// if (name !== "" && email !== "" && lastName !== "" && password !== "") {
	// 	// 	createUser(user);
	// 	// }
	// 	event.preventDefault();
	// };
	const validateForm = () => {
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		let url = `${apiBaseURL}/api/sign_in`;
		let raw = JSON.stringify({ email, password });

		let requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw
			// redirect: "follow"
		};

		fetch(url, requestOptions)
			.then(response => response.json())
			.then(result => {
				// history.push("/gracias");
				localStorage.setItem("token", result.access_token);
				console.log(result.access_token);
			})

			.catch(error => console.log("error", error));
	};
	return (
		<div>
			<div className="Login">
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
					</Form.Group>
					<Button block size="lg" type="submit">
						Login
					</Button>
				</Form>
			</div>
		</div>
	);
};
