import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carbon from "../../img/sellos/carbon.png";
import Ecolabel from "../../img/sellos/EU-Ecolabel.jpg";
import TopCotton from "../../img/sellos/Exx-TopCotton.jpg";
import FairWear from "../../img/sellos/fair-wear.png";
import OCC from "../../img/sellos/Logo-OCC.jpg";
import OekoTex from "../../img/sellos/oeko-tex.jpg";
import OrganicTextile from "../../img/sellos/organic-textile.jpg";
import Vegan from "../../img/sellos/vegan.jpg";
import FairTrade from "../../img/sellos/Fairtrade.png";
import AlgodonOrganico from "../../img/sellos/algodon-organico.png";

const responsive = {
	desktop: {
		breakpoint: { max: 2000, min: 1024 },
		items: 4,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};
export const MultiCarousel = () => {
	return (
		<div className="Container">
			<h2 className="text-center py-3">Nuestros sellos de calidad</h2>
			<p className="ml-3">
				Trabajamos únicamente con empresas y marcas certificadas con sellos de calidad y estándares que te
				ofrezcan una garantía absoluta de que el producto que estás adquiriendo responde a unos protocolos de
				sostenibilidad concretos. Productos con 100% de algodón ecológico, empresas que trabajan con los más
				altos estándares sociales y ecológicos para que la ropa te siente bien a ti y al planeta.
			</p>
			<Carousel
				swipeable={false}
				draggable={false}
				showDots={false}
				responsive={responsive}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				//autoPlay={this.props.deviceType !== "mobile" ? true : false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				//removeArrowOnDeviceType={["tablet", "mobile"]}
				//deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px">
				<div>
					<img src={Carbon} />
				</div>
				<div>
					<img src={Ecolabel} />
				</div>
				<div>
					<img src={TopCotton} />
				</div>
				<div>
					<img src={FairWear} />
				</div>
				<div>
					<img src={OCC} />
				</div>
				<div>
					<img src={OekoTex} />
				</div>
				<div>
					<img src={OrganicTextile} />
				</div>
				<div>
					<img src={Vegan} />
				</div>
				<div>
					<img src={FairTrade} />
				</div>
				<div>
					<img src={AlgodonOrganico} />
				</div>
			</Carousel>
		</div>
	);
};
