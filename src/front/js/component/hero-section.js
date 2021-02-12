import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Hero_Section = () => {
	return (
		<div>
			<div className="text-center mt-2">
				<h1 className="display-4">Apuesta por un futuro sostenible con SostenibleOnline</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.
				</p>
			</div>
			<section id="home-icons" className="py-4">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-globe fa-3x mb-2" />
							<h3>Cuida del planeta</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error!</p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-users fa-3x mb-2" />
							<h3>Y de las personas</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error!</p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-paw fa-3x mb-2" />
							<h3>Animal friendly</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error!</p>
						</div>
						<div className="col-md-3 mb-2 text-center">
							<i className="fas fa-store fa-3x mb-2" />
							<h3>Pro negocio local</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, error!</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
