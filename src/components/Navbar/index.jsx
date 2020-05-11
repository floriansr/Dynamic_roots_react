import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<ul>
				<Link to="/">Home</Link>
				<Link to="/Documentation">Documentation</Link>
				<Link to="/About">About</Link>
			</ul>
		</>
	);
};

export default Navbar;
