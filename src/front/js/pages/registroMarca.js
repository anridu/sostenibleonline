import React, { useState, useEffect, useContext } from "react";
import { apiBaseURL } from "../constants";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const RegistroMarca = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);
	const [commercialName, setCommercialName] = useState("");
	const [taxName, setTaxName] = useState("");
	const [logo, setLogo] = useState();
	const [person, setPerson] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [region, setRegion] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [description, setDescription] = useState("");
	const [check, setCheck] = useState([]);
	const [certs, setCerts] = useState();

	const handleClick = () => {
		let business = {
			comercial_name: commercialName,
			tax_name: taxName,
			// logo: logo,
			person: person,
			email: email,
			adress: address,
			city: city,
			region: region,
			zip_code: zipCode,
			description: description,
			password: password
			// check: check,
			// certs: certs
		};

		// if (name !== "" && email !== "" && lastName !== "" && password !== "") {
		// 	createBusiness(business);
		// }

		const createBusiness = business => {
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			let url = `${apiBaseURL}api/businesses`;
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
					history.push("/gracias");
					console.log(result);
				});
		};
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

			<form>
				<div className="row mb-3">
					<div className="col">
						<label htmlFor="Marca">Nombre comercial</label>
						<input
							type="text"
							value={commercialName}
							onChange={event => setCommercialName(event.target.value)}
							className="form-control"
							placeholder="Nombre de la marca/tienda"
						/>
					</div>
					<div className="col">
						<label htmlFor="web">Nombre Fiscal</label>
						<input
							type="text"
							onChange={event => setTaxName(event.target.value)}
							className="form-control"
							placeholder="Tu empresa"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="form-group ml-3">
						<label htmlFor="exampleFormControlFile1">Subir logo</label>
						<input
							type="file"
							onChange={event => setLogo(event.target.value)}
							className="form-control-file"
							id="exampleFormControlFile1"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col">
						<label htmlFor="Contact">Persona de Contacto</label>
						<input
							type="text"
							onChange={event => setPerson(event.target.value)}
							className="form-control"
							placeholder="Nombre y apellidos"
						/>
					</div>
					<div className="col">
						<label htmlFor="email">Correo electrónico</label>
						<input
							type="email"
							onChange={event => setEmail(event.target.value)}
							className="form-control"
							placeholder="xxx@xxxx.com"
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col">
						<label htmlFor="CodigoPostal">Dirección</label>
						<input
							type="text"
							onChange={event => setAdress(event.target.value)}
							className="form-control"
							placeholder="Calle, número, puerta."
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">Ciudad</label>
						<input
							type="text"
							onChange={event => setCity(event.target.value)}
							className="form-control"
							id="inputCity"
						/>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputState">Provincia</label>
						<select
							id="inputState"
							onChange={event => setRegion(event.target.value)}
							className="form-control">
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
						<input
							type="text"
							onChange={event => setZipCode(event.target.value)}
							className="form-control"
							id="inputZip"
						/>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col">
						<div className="form-group">
							<label htmlFor="exampleFormControlTextarea">Descripción de tu empresa/marca</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea"
								onChange={event => setDescription(event.target.value)}
								rows="4"
							/>
						</div>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-md-6">
						<label htmlFor="input-check">¿De qué sellos de sostenibilidad dispones?</label>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
							<label className="form-check-label" htmlFor="defaultCheck1">
								EU Ecolabel
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
							<label className="form-check-label" htmlFor="defaultCheck2">
								BIO Cotton
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
							<label className="form-check-label" htmlFor="defaultCheck2">
								Fairtrade
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
							<label className="form-check-label" htmlFor="defaultCheck2">
								STeP by OEKO-TEX®
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
							<label className="form-check-label" htmlFor="defaultCheck2">
								PETA Approved Vegan
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
							<label className="form-check-label" htmlFor="defaultCheck2">
								GLOBAL ORGANIC TEXTILE STANDARD
							</label>
						</div>
					</div>
					<div className="col-md-6">
						<div className="form-group ml-3">
							<label htmlFor="exampleFormControlFile1">Subir certificados de calidad</label>
							<input
								type="file"
								className="form-control-file"
								id="exampleFormControlFile1"
								onChange={event => setCerts(event.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-md">
						<div className="form-group ml-3">
							<button onClick={event => handleClick(event)} className="btn btn-success btn-lg">
								Registro
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
