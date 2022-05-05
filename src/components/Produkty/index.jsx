import React, {useState, useEffect} from 'react';
import './style.css';

import {
	Link,
	Outlet,
} from 'react-router-dom';

const Produkty = () => {

	const [seznam, setSeznam] = useState([]);

	useEffect(
		() => {
			fetch(`https://swapi.dev/api/people`)
			.then(response => response.json())
			.then(data => {
				setSeznam(data.results);
			});
		},
		[]
	)



	return (
		<div className="komponenta">
			<h3>Produkty</h3>

			<div className="grid">
				<ul>
					{/* <li><Link to="/produkty/1">Luke</Link></li>
					<li><Link to="/produkty/2">C3PO</Link></li>
					<li><Link to="/produkty/3">R2D2</Link></li>
					<li><Link to="/produkty/4">Taťka Darth Vader</Link></li> */}

					{ seznam.map((person, index) => <li><Link to={`/produkty/${index+1}`}>{person.name}</Link></li> ) }
				</ul>

				<Outlet />
			</div>

		</div>
	)
}

export default Produkty;
