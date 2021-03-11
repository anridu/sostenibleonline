import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

export const CardCategory = () => {
	return (
		<Card className="mb-5">
			<Card.Img variant="top" src="https://picsum.photos/id/237/200/300" style={{ height: "18rem" }} />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="success">Ver el producto</Button>
			</Card.Body>
		</Card>
	);
};
