import React from "react";

//include images into your bundle
import marca from "../../img/ropa.jpg";

//create your first component
export function Marca() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<div className="text-left mt-5">
						<h1>Marca XX</h1>{" "}
						<p>
							<img src={marca} />{" "}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm">
						<div className="text-left mt-5">One of three columns</div>
					</div>
				</div>
			</div>
		</div>
	);
}
