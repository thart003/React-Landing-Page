import React from "react";

//include images into your bundle
import NavBar from "./NavBar.js";
import { Jumbotron } from "./jumbotron.js";
import { Cards } from "./Cards.js";
import Footer from "./Footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
