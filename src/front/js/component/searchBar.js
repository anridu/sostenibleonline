import React, { useState } from "react";

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	let test = [
		{ id: 1, first_name: "Kalle", last_name: "Pinor", email: "kpinor0@last.fm", gender: "Female" },
		{ id: 2, first_name: "Fredrick", last_name: "Diehn", email: "fdiehn1@java.com", gender: "Agender" },
		{
			id: 3,
			first_name: "Roseanna",
			last_name: "Startin",
			email: "rstartin2@reverbnation.com",
			gender: "Genderfluid"
		},
		{ id: 4, first_name: "Oby", last_name: "Plover", email: "oplover3@histats.com", gender: "Polygender" },
		{ id: 5, first_name: "Gussie", last_name: "Kirkwood", email: "gkirkwood4@4shared.com", gender: "Female" },
		{ id: 6, first_name: "Ben", last_name: "Duckworth", email: "bduckworth5@paginegialle.it", gender: "Bigender" },
		{ id: 7, first_name: "Bax", last_name: "Sodor", email: "bsodor6@opera.com", gender: "Female" },
		{ id: 8, first_name: "Dee", last_name: "Juleff", email: "djuleff7@seesaa.net", gender: "Male" },
		{
			id: 9,
			first_name: "Krishna",
			last_name: "Zecchinii",
			email: "kzecchinii8@sciencedirect.com",
			gender: "Polygender"
		},
		{ id: 10, first_name: "Marje", last_name: "Braven", email: "mbraven9@hp.com", gender: "Female" }
	];

	const handleChange = e => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};

	if (searchTerm.length > 0) {
		test = test.filter(i => {
			return i.first_name.toLowerCase().match(searchTerm);
		});
	}

	return (
		<div>
			<input type="text" placeholder="...Buscar" onChange={handleChange} value={searchTerm} />
			{test.map((person, index) => {
				return (
					<div key={index}>
						<ul>
							<li>
								{person.first_name} - {person.gender}
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
