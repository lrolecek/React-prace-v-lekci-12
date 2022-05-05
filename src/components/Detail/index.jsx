import React from 'react';
import './style.css';

import { useParams } from 'react-router-dom';


const Detail = () => {

	const {id} = useParams();

	return (
		<div className="komponenta">
			<h3>Detail zboží: {id}</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, dolor!</p>
		</div>
	)
}

export default Detail;
