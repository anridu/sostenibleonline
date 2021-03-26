import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CardDeck from "react-bootstrap/CardDeck";
import { ProductCard } from "../component/productcard";

export const BusinessProfile = () => {
	const { store, actions } = useContext(Context);
	console.log(store.isLogged);

	return (
		<div className="container">
			<h1 className="display-4 py-5 text-center">Bienvenido a tu perfil en SostenibleOnline</h1>
			<div className="row">
				<div className="col">
					<h3>Perfil</h3>
					<p className="lead pt-2 my-2">
						Formas parte de la comunidad de SostenibleOnline. Esta es la página desde la que puedes acceder
						a tus productos y subir nuevos productos a la tienda.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col text-center mb-3">
					<a href="/subir-producto" className=" my-4 btn btn-lg btn-secondary text-center mb-5 mr-3">
						<i className="fas fa-upload" /> Subir un producto
					</a>
					<a href="/subir-producto" className=" my-4 btn btn-lg btn-danger text-center mb-5">
						<i className="fas fa-sign-out-alt" /> Cerrar Sesión
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h3 className="pb-3">Productos subidos</h3>
					<CardDeck>
						<ProductCard />
					</CardDeck>
				</div>
			</div>
		</div>
	);
};
