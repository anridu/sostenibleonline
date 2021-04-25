import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

import { ProductCard } from "../component/productcard";

export const Categories = () => {
	return (
		<div className="container">
			<div className="container">
				<h1>Categorías</h1>
				<p>
					It is a long established fact that a reader will be distracted by the readable content of a page
					when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
					distribution of letters, as opposed to using Content here, content here, making it look like
					readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
					default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
					Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
					humour and the like).
				</p>
				<div className="container-fluid" style={{ background: "#D3D3D3" }}>
					<div style={{ textAlign: "right" }}>
						<Button variant="secondary" size="sm">
							Small button
						</Button>
					</div>
				</div>
				<CardDeck>
					<ProductCard />
				</CardDeck>

				<Button className="float-right" variant="secondary">
					<h5>Cargar mas categorías</h5>
				</Button>
			</div>
		</div>
	);
};
