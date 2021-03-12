import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

import { CardCategory } from "../component/cardCategory";

export const RopaUnisex = () => {
	return (
		<div className="container">
			<div className="container">
				<h1 className="display-4 py-5 text-center">Ropa unisex</h1>
				<p className="lead">
					En esta página encontrarás una selección de ropa unisex, fabricada y diseñada en España. Pantalones,
					sudaderas, camisetas o camisas entre muchas otras prendas. Pensamos que la ropa no tiene género y
					por esta razón te ofrecemos una colección pensada para todxs.
				</p>
				<p>
					Las prendas que encontrarás en SostenibleOnline se han diseñado pensando en tu comodidad. Es ropa
					duradera y de buena calidad, con la que te verás elegante y ayudarás a conservar el planeta. Porque
					no hay un planeta B.
				</p>
				<p>
					Todos nuestros productos disponen de los sellos de calidad y sostenibilidad más exigentes.
					Trabajamos con algodón orgánico, hilo reciclado y materias primeras de alta calidad.
				</p>
				<div className="container-fluid" style={{ background: "#D3D3D3" }}>
					<div style={{ textAlign: "right" }}>
						<Button variant="secondary" size="sm">
							Aplica un filtro
						</Button>
					</div>
				</div>
				<CardDeck>
					<CardCategory />
					<CardCategory />
					<CardCategory />
					<CardCategory />
				</CardDeck>
				<CardDeck>
					<CardCategory />
					<CardCategory />
					<CardCategory />
					<CardCategory />
				</CardDeck>
				<CardDeck>
					<CardCategory />
					<CardCategory />
					<CardCategory />
					<CardCategory />
				</CardDeck>
				<Button className="float-right" variant="secondary">
					Cargar más prendas
				</Button>
			</div>
		</div>
	);
};
