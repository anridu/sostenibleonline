import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Team from "../../img/team.jpg";
import Sonia from "../../img/Sonia.jpg";
import Angel from "../../img/angel.png";
import Samuel from "../../img/Samuel.jpg";
import nosotros from "../../img/nosotros.jpg";

export const About = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className="display-4">Sobre nosotros</h1>

			<Tabs defaultActiveKey="description" id="tabs" className="mt-3 justify-content-center">
				<Tab eventKey="description" title="Descripción del proyecto" className="tab">
					<div className="container p-3">
						<div className="row">
							<div className="col-md-6">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed efficitur diam,
									facilisis laoreet leo. Pellentesque malesuada viverra accumsan. Suspendisse faucibus
									augue non mi rutrum auctor. Donec eget sapien nisl. In vitae magna eleifend nisl
									feugiat pulvinar. Cras sagittis vestibulum lorem, sit amet maximus nulla euismod in.
									Suspendisse sit amet dictum justo, non auctor arcu. Nam elementum ultrices nulla a
									convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
									inceptos himenaeos. Donec auctor nisl ac sollicitudin fringilla. Sed dapibus
									sagittis nisl, sit amet pellentesque ipsum vestibulum sed.
								</p>
								<p>
									Sed laoreet nulla ut libero egestas, in porta orci efficitur. Cras mollis ante leo,
									nec mattis odio placerat eu. Mauris volutpat neque nunc, quis efficitur leo
									convallis quis. Morbi id lacus eu est congue eleifend. Mauris at luctus enim, at
									facilisis lectus. In sit amet mattis urna. Etiam egestas sollicitudin porta.
									Vestibulum finibus porta eros at faucibus. Duis felis mauris, tempus non ex maximus,
									volutpat laoreet justo. Integer at dapibus tellus. Mauris a lacus blandit, tristique
									turpis at, efficitur est.
								</p>
							</div>
							<div className="col-md-6">
								<img src={Team} className="img-fluid" />
							</div>
						</div>
					</div>
				</Tab>
				<Tab eventKey="historia" title="Historia">
					<div className="container p-3">
						<div className="row">
							<div className="col">
								<p>
									Donec a blandit neque, eget sodales erat. Nulla eget nisl at neque pellentesque
									elementum. Cras volutpat augue at leo varius interdum. Duis luctus mattis velit, a
									viverra eros porta sed. Fusce consequat sem nisi, quis rutrum nisl rutrum quis.
									Proin sit amet mauris eleifend, elementum odio blandit, pretium libero. Suspendisse
									fringilla tellus accumsan felis porta faucibus. Ut eget quam euismod, placerat risus
									ut, ornare nisl. Vivamus sit amet efficitur mi, vitae consectetur ex.
								</p>
							</div>
						</div>
					</div>
				</Tab>
				<Tab eventKey="equipo" title="Equipo">
					<div id="team" className="team container p-3">
						<div className="row">
							<p>
								Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at
								voluptas atque vitae autem.
							</p>
							<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
								<div className="member">
									<div className="member-img">
										<img width={900} height={500} src={Angel} className="img-fluid" alt="" />
										<div className="social">
											<a href="">
												<i className="fab fa-twitter" />
											</a>
											<a href="">
												<i className="fab fa-facebook" />
											</a>
											<a href="">
												<i className="fab fa-instagram" />
											</a>
											<a href="">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
									<div className="member-info">
										<h4>Ángel Rivero</h4>
										<span>Marketing manager</span>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
								<div className="member">
									<div className="member-img">
										<img src={Samuel} className="img-fluid" alt="" />
										<div className="social">
											<a href="">
												<i className="fab fa-twitter" />
											</a>
											<a href="">
												<i className="fab fa-facebook" />
											</a>
											<a href="">
												<i className="fab fa-instagram" />
											</a>
											<a href="">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
									<div className="member-info">
										<h4>Samuel Hernández</h4>
										<span>Product Manager</span>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 d-flex align-items-stretch">
								<div className="member">
									<div className="member-img">
										<img src={Sonia} className="img-fluid" alt="" />
										<div className="social">
											<a href="https://twitter.com/home">
												<i className="fab fa-twitter" />
											</a>
											<a href="https://www.facebook.com/schavesroca/">
												<i className="fab fa-facebook" />
											</a>
											<a href="https://www.instagram.com/sonia_scr/">
												<i className="fab fa-instagram" />
											</a>
											<a href="https://www.linkedin.com/in/chavesonia/">
												<i className="fab fa-linkedin" />
											</a>
										</div>
									</div>
									<div className="member-info">
										<h4>Sònia Chaves</h4>
										<span>Sales manager</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Tab>
				<Tab eventKey="compromiso" title="Compromiso">
					<div className="container p-3">
						<div className="row">
							<div className="col-md-6">
								<img src={nosotros} className="img-fluid" />
							</div>
							<div className="col-md-6">
								<p>
									Donec a blandit neque, eget sodales erat. Nulla eget nisl at neque pellentesque
									elementum. Cras volutpat augue at leo varius interdum. Duis luctus mattis velit, a
									viverra eros porta sed. Fusce consequat sem nisi, quis rutrum nisl rutrum quis.
									Proin sit amet mauris eleifend, elementum odio blandit, pretium libero. Suspendisse
									fringilla tellus accumsan felis porta faucibus. Ut eget quam euismod, placerat risus
									ut, ornare nisl. Vivamus sit amet efficitur mi, vitae consectetur ex.
								</p>
							</div>
						</div>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
};
