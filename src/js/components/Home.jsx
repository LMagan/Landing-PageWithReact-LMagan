import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "./Card";
import Gallery from "./Gallery";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar></NavBar>
			<Jumbotron></Jumbotron>
			<Gallery></Gallery>
			<Footer></Footer>

		</div>
	);
};

export default Home;