import React, {useState, useEffect} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Detail = () => {

	const {id} = useParams();

	const [zbozi, setZbozi] = useState({});

	useEffect(
		() => {
			fetch(`https://swapi.dev/api/people/${id}`)
			.then(response => response.json())
			.then(data => {
				setZbozi(data);
			});
		},
		[id]
	)



	return (
		<div className="komponenta">
			<h3>Detail zboží: {id}</h3>
			<p>Nazev: {zbozi.name}</p>
			<p>Barva: {zbozi.eye_color}</p>
			<p>Záruka do: {zbozi.birth_year}</p>
			<hr />
			<Link to="/produkty">Zpět na přehled produktů</Link>
		</div>
	)
}

export default Detail;
