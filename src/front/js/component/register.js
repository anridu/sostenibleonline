import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import register from "../../img/register.jpg";

export const Register = () => {
	return (
		<div className="row register ">
			<div className="dark-overlay">
				<div className="col text-center text-light mb-4 ">
					<h2 className="p-3">Regístrate ahora</h2>
					<p className="lead p-3">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
					</p>
					<button className="btn btn-success">Regístrate a nuestra newsletter</button>
				</div>
			</div>
		</div>
	);
};
