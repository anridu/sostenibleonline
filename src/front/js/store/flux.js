import { useHistory } from "react-router-dom";
import { apiBaseURL } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			productsCart: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			isLogged: false,

			business: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addProduct: element => {
				const store = getStore();
				setStore({ productsCart: [...store.productsCart, element] });
			},

			removeProduct: index => {
				const store = getStore();
				const newproductsCart = store.productsCart;
				newproductsCart.splice(index, 1);
				setStore({ productsCart: newproductsCart });
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			setIsLogged: value => {
				setStore({
					isLogged: value
				});
			},

			getBusiness: () => {
				let myHeaders = new Headers();
				myHeaders.append(
					"Authorization",
					"Bearer " + localStorage.getItem("token"),
					"Content-Type",
					"application/json"
				);

				let url = `${apiBaseURL}/api/me/get_business`;

				var requestOptions = {
					method: "GET",
					headers: myHeaders
				};

				fetch(url, requestOptions)
					.then(response => response.json())
					.then(result => {
						//history.push("/");
						setStore({
							business: result
						});
					});
			},

			getProducts: () => {},

			signUp: user => {},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
