import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Slideshow } from "../component/slideshow.js";
import { Register } from "../component/register.js";
import { Hero_Section } from "../component/hero-section.js";
import { Home_Categories } from "../component/home-categories.js";
import { Contact } from "../component/contacto.js";
import { BrandCarousel } from "../component/brand-carousel";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Slideshow />
			<Hero_Section />
			<Home_Categories />
			<Register />
			<BrandCarousel />
			<Contact />
		</div>
	);
};
