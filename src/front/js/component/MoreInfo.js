import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import algodon from "../../img/cotton.jpg";
import hilo from "../../img/hilo.jpg";
import nature from "../../img/icons/conserving-nature.png";
import label from "../../img/icons/Label.png";
import NoPesticides from "../../img/icons/No Pesticides.png";
import NoChemicals from "../../img/icons/No-Chemical.png";
import SaveWater from "../../img/icons/SaveWater.png";
import Tshirt from "../../img/icons/Tshirt.png";

export const MoreInfo = () => {
	return (
		<div className="container-fluid p-2">
			<h2 className="text-center pt-3">¿Quieres saber más?</h2>
			<div className="row py-5">
				<div className="col-md-3">
					<img src={algodon} className="img-fluid rounded-circle ml-4" />
				</div>
				<div className="col-md-9">
					<h4>¿Qué és el algodón orgánico?</h4>
					<p>
						Nuestras prendas están hechas con algodón orgánico. Se trata de un algodón cultivado con métodos
						y materiales que tienen un impacto bajo sobre el medioambiente. No se permite el uso de
						pesticidas, instecticidas o herbicidas que són dañinos para el entorno, los agricultores y los
						consumidores. Los abonos que se utilizan para el cultivo del algodón orgánico són naturales.
						Además de la calidad del producto, el algodón orgánico garntiza los derechos de las personas que
						lo trabajan (salario,jornadas laborales...)
					</p>
					<img src={label} className="p-2" />
					<img src={nature} className="p-2" />
					<img src={NoPesticides} className="p-2" />
				</div>
			</div>
			<div className="row py-3 mb-3 ml-3">
				<div className="col-md-9">
					<h4>¿Hilo reciclado?</h4>
					<p>
						Otra de las técnicas que utilizan nuestros productores es el uso de hilo reciclado. ¿No sabes de
						lo qué se trata? En el proceso de hilatura se reciclan recortes que han sobrado de fábricas
						texitles para convertir las telas de nuevo en hilo. Con este proceso se onsigue un gran ahorro
						de agua, así como la necesidad de usar tintes para la ropa.
					</p>
					<img src={Tshirt} className="p-2" />
					<img src={SaveWater} className="p-2" />
					<img src={NoChemicals} className="p-2" />
				</div>
				<div className="col-md-3">
					<img src={hilo} className="img-fluid, rounded-circle float-left" />
				</div>
			</div>
		</div>
	);
};
