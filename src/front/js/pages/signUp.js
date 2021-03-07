import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUp = () => {
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
		actions.signUp(user);
	};

	return (
		<div className="container">
			<div className="jumbotron mt-4">
				<h1 className="display-4">Registro de usuarios</h1>
			</div>

			<div className="row mb-3">
				<div className="col">
					<label htmlFor="Marca">Nombre</label>
					<input
						onChange={event => setName(event.target.value)}
						type="text"
						className="form-control"
						placeholder="Elon"
					/>
				</div>
				<div className="col">
					<label htmlFor="web">Apellidos</label>
					<input
						onChange={event => setLastName(event.target.value)}
						type="text"
						className="form-control"
						placeholder="Musk"
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col">
					<label htmlFor="email">Correo electrónico</label>
					<input
						onChange={event => setEmail(event.target.value)}
						type="email"
						className="form-control"
						placeholder="xxx@xxxx.com"
					/>
				</div>
				<div className="col">
					<label htmlFor="Marca">Contraseña</label>
					<input
						onChange={event => setPassword(event.target.value)}
						type="password"
						className="form-control"
						placeholder="*******"
					/>
				</div>
			</div>

			<div className="row mb-3">
				<div className="col-md-6">
					<div className="form-group ml-3">
						<Link to="/gracias">
							<button onClick={event => handleClick(event)} className="btn btn-primary">
								Registro
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
