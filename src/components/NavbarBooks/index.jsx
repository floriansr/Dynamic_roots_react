import React from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

const NavbarBooks = ({ data }: NavbarBooks) => {
	return (
		<>
			<ul>
				{console.log(data)}

				{data.map((x) => (
					<div key={shortid.generate()}>
						<Link to={`/book/${x.slug}`} className="mr">
							{x.title}
						</Link>

						<p>{x.description}</p>
					</div>
				))}
			</ul>
		</>
	);
};

export default NavbarBooks;
