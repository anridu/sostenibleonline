import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//include images into your bundle
import marca from "../../img/ropa.jpg";

//create your first component
export const Product = () => {
	const [details, setDetails] = useState();
	const params = useParams();
	console.log(params);
	useEffect(() => {
		fetch(`https://3001-plum-termite-vsldad1r.ws-eu03.gitpod.io/api/products/1`)
			// fetch(`https://3001-purple-centipede-th6irne2.ws-eu03.gitpod.io/api/products/${params.id}`)
			.then(resp => resp.json())
			.then(data => {
				setDetails(data);
			});
	}, []);
	return (
		<div>
			<div>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-4">
							<img src={marca} className="img-thumbnail" />{" "}
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{details ? details.product_name : "loading"}</h5>
								<h5 className="card-title">Color</h5>
								<h5 className="card-body">{details ? details.color : "loading"}</h5>

								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Elige tu talla
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<a className="dropdown-item" href="#">
											s
										</a>
										<a className="dropdown-item" href="#">
											M
										</a>
										<a className="dropdown-item" href="#">
											L
										</a>
										<a className="dropdown-item" href="#">
											XL
										</a>
									</div>
								</div>
								<br />
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										Cantidad
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										{/* igual que la talla o diferente?? */}
										<a className="dropdown-item" href="#">
											1
										</a>
										<a className="dropdown-item" href="#">
											2
										</a>
										<a className="dropdown-item" href="#">
											3
										</a>
										<a className="dropdown-item" href="#">
											Para mas cantidad contacta con nosotros
										</a>
									</div>

									<h5 className="card-body">
										{details ? details.price : "loading"}
										Euros
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row justify-content-center mt-3">
				<div className="col-md-8">
					<div className="card text-center border-info">
						<div className="card-header">
							<ul className="nav nav-tabs card-header-tabs">
								<li className="nav-item">
									<a className="nav-link" href="#">
										Descripción
									</a>
								</li>
								{/* <li className="nav-item">
									<a className="nav-link" href="#">
										Información adicional
									</a>
								</li> */}
							</ul>
						</div>
						<div className="card-body">
							<p className="card-text">{details ? details.product_name : "loading"}</p>
							<p className="card-text">{details ? details.description : "loading"}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
