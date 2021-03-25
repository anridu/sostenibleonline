import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Categories } from "./pages/categories";
import { RopaHombre } from "./pages/hombre";
import { RopaMujer } from "./pages/mujer";
import { RopaUnisex } from "./pages/unisex";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { TopNav } from "./component/navbar";
import { _Footer } from "./component/footer";
import { RegistroMarca } from "./pages/registroMarca";
import { About } from "./pages/about";
import { Marca } from "./pages/paginaDeMarca";
import { ProductForm } from "./pages/productForm";
import { SignUp } from "./pages/signUp";
import { Product } from "./pages/producto";
import { Checkout } from "./pages/checkout";
import { Registro } from "./pages/registro";
import { Gracias } from "./pages/gracias-registro";
import { Login } from "./pages/login";
import { BusinessProfile } from "./pages/business-profile";

import { ProductGalery } from "./pages/productGalery";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<TopNav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/registro-marca">
							<RegistroMarca />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/pagina-marca">
							<Marca />
						</Route>
						<Route exact path="/categories">
							<Categories />
						</Route>
						<Route exact path="/ropa-hombre">
							<RopaHombre />
						</Route>
						<Route exact path="/ropa-mujer">
							<RopaMujer />
						</Route>
						<Route exact path="/ropa-unisex">
							<RopaUnisex />
						</Route>
						<Route exact path="/subir-producto">
							<ProductForm />
						</Route>
						<Route exact path="/sign-up">
							<SignUp />
						</Route>
						<Route exact path="/producto-id">
							<Product />
						</Route>
						<Route exact path="/productos">
							<ProductGalery />
						</Route>
						<Route exact path="/compra">
							<Checkout />
						</Route>
						<Route exact path="/registro">
							<Registro />
						</Route>
						<Route exact path="/gracias">
							<Gracias />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/perfil-empresa">
							<BusinessProfile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<_Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
