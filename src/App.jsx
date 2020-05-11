import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "pages/About";
import Documentation from "pages/Documentation";
import Home from "pages/Home";
import Book from "pages/Book";

import Navbar from "components/Navbar";
import NavbarBooks from "components/NavbarBooks";

import dataBooks from "data/dataBooks";

const App = () => {
	return (
		<>
			<Router>
				<div>
					<Navbar />

					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/documentation">
							<Documentation />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>

			<Router>
				<div>
					<NavbarBooks data={dataBooks} />

					<Switch>
						<Route path={`/book/:bookSlug`}>
							<Book />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
};

export default App;
