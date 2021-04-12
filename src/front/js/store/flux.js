import { useHistory } from "react-router-dom";
import { apiBaseURL } from "../constants";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLogged: false,
			business: [],
			itemsShoppingCard: []
		},
		actions: {
			// Use getActions to call a function within a fuction
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

			//getProducts: () => {},

			signUp: user => {},

			addProductToShoppingCard: product => {
				console.log(product, "#");
				const store = getStore();
				product.IdEnCesta = store.itemsShoppingCard.length;
				setStore({
					itemsShoppingCard: [...store.itemsShoppingCard, product]
				});
				localStorage.setItem("product", JSON.stringify(store.itemsShoppingCard));
			},

			updateShoppingCart: cart => {
				setStore({ itemsShoppingCard: cart });
			},

			removeProductFromShoppingCart: IdEnCesta => {
				const store = getStore();
				let i = 0;
				while (store.itemsShoppingCard[i].IdEnCesta != IdEnCesta && i < store.itemsShoppingCard.length) {
					i++;
				}
				store.itemsShoppingCard.splice(i, 1);
				setStore({ itemsShoppingCard: store.itemsShoppingCard });
				localStorage.setItem("product", JSON.stringify(store.itemsShoppingCard));
			}
		}
	};
};

export default getState;
