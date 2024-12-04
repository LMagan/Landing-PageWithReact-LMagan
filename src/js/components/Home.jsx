import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Card from "./Card";
import Gallery from "./Gallery";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Erwin!</h1>
			<h1>Welcome to React!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<Card imageUrl="https://www.pawlovetreats.com/cdn/shop/articles/pembroke-welsh-corgi-puppy_2500x.jpg" ></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Gallery></Gallery>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;