import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { Context } from "../store/appContext";

export const RopaMujer = () => {
	return (
		<div className="container">
			<div className="container">
				<h1 className="display-4 py-5 text-center">Ropa de mujer</h1>
				<p className="lead">
					En esta página encontrarás una selección de ropa para mujer, fabricada y diseñada en España.
					Pantalones, sudaderas, camisetas o camisas, faldas y vestidos, entre muchas otras prendas para que
					te sientas bien en tu cuerpo al mismo tiempo que cuidas del planeta.
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

				<Button className="float-right" variant="secondary">
					Cargar más prendas
				</Button>
			</div>
		</div>
	);
};
