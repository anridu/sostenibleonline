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
	const params = useParams();
	const { imageUrl, product_name, description } = data.data;
	console.log(data.data.product_name);

	return (
		<Card className="mb-5">
			<Card.Img variant="top" src={data ? imageUrl : "loading"} />
			<Card.Body>
				<Card.Title>{data ? product_name : "loading"}</Card.Title>
				<Card.Text>{data ? description : "loading"}</Card.Text>
				<Link to={`/products/${data.data.id}`}>
					<button className="btn btn-success">Ver el producto</button>
				</Link>
			</Card.Body>
		</Card>
	);
};

ProductCard.propTypes = {
	data: PropTypes.object
};
