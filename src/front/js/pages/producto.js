import React from "react";

//include images into your bundle
import marca from "../../img/ropa.jpg";

//create your first component
export function Product() {
	return (
		<div>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={marca} className="img-thumbnail" />{" "}
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Greenlive</h5>
							<p className="card-text">
								This is a wider card with supporting text below as a natural lead-in to additional
								content. This content is a little bit longer.
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
