import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Jumbotron from "react-bootstrap/Jumbotron";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import FormFile from "react-bootstrap/FormFile";
import { Col, Row, Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const ProductForm = () => {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Fluid jumbotron</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>
			<Form className="m-5">
				<Form.Row>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Nombre del producto</Form.Label>
						<Form.Control type="text" placeholder="Enter email" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Página Web</Form.Label>
						<Form.Control type="text" placeholder="Password" />
					</Form.Group>
				</Form.Row>
				<Form.Group>
					<Form.File
						id="custom-file-translate-html"
						label="Carga tu producto"
						data-browse="Examinar"
						custom
					/>
				</Form.Group>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Cantidad</Form.Label>
						<Form.Control />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Talla</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridText">
						<Form.Label>Cantidad</Form.Label>
						<Form.Control />
					</Form.Group>
					<Form.Group as={Col} controlId="formGridState">
						<Form.Label>Color</Form.Label>
						<Form.Control as="select" defaultValue="Choose...">
							<option>Choose...</option>
							<option>...</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Example textarea</Form.Label>
					<Form.Control as="textarea" rows={3} />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<p>¿De qué sellos de sostenibilidad dispone el producto?</p>
					<Form.Check type="checkbox" label="EU Ecolabel" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="BIO Cotton" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="Fairtrade" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="STeP by OEKO-TEX®" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="PETA Approved Vegan" />
				</Form.Group>
				<Form.Group id="formGridCheckbox">
					<Form.Check type="checkbox" label="GLOBAL ORGANIC TEXTILE STANDARD" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};
