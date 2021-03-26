import React, { useState, useEffect } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import Context from "../store/appContext";
import { apiBaseURL } from "../constants";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductCard = data => {
	// const [details, setDetails] = useState();
	const params = useParams();
	// useEffect(() => {
	// 	let url = `${apiBaseURL}/api/products/<int:id>`;
	// 	fetch(url)
	// 		.then(resp => resp.json())
	// 		.then(data => {
	// 			setDetails(data);
	// 		});
	// }, []);
	const { imageUrl, product_name, description } = data.data;
	console.log(data.data.product_name);

	return (
		<Card className="mb-5">
			<Card.Img variant="top" src={data ? imageUrl : "loading"} style={{ height: "18rem" }} />
			<Card.Body>
				<Card.Title>{data ? product_name : "loading"}</Card.Title>
				<Card.Text>{data ? description : "loading"}</Card.Text>
				<Button variant="success">Ver el producto</Button>
			</Card.Body>
		</Card>
	);
};

ProductCard.propTypes = {
	data: PropTypes.object
};
