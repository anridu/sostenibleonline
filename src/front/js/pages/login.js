import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">Registro de usuarios</h1>
			</div>

			<form>
				<div className="row mb-3">
					<div className="col">
						<label htmlFor="Marca">Nombre</label>
						<input type="text" className="form-control" placeholder="Elon" />
					</div>
					<div className="col">
						<label htmlFor="web">Apellidos</label>
						<input type="text" className="form-control" placeholder="Musk" />
					</div>
				</div>

				<div className="row mb-3">
					<div className="col">
						<label htmlFor="Contact">Empresa</label>
						<input type="text" className="form-control" placeholder="4Geeks" />
					</div>
					<div className="col">
						<label htmlFor="email">Correo electrónico</label>
						<input type="email" className="form-control" placeholder="xxx@xxxx.com" />
					</div>
				</div>

				<div className="row mb-3">
					<div className="col">
						<label htmlFor="CodigoPostal">Dirección</label>
						<input type="text" className="form-control" placeholder="Calle, número, puerta." />
					</div>
				</div>
				<div className="row mb-3">
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">Ciudad</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputState">Provincia</label>
						<select id="inputState" className="form-control">
							<option selected>Elige...</option>
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
						</select>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="inputZip">Código postal</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label htmlFor="Marca">Contraseña</label>
						<input type="text" className="form-control" placeholder="*******" />
					</div>
					<div className="col">
						<label htmlFor="web">Repetir contraseña</label>
						<input type="text" className="form-control" placeholder="********" />
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-6">
						<div className="form-group ml-3">
							<button type="submit" className="btn btn-primary">
								Registro
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
