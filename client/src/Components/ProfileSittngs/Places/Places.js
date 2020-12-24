import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import PlaceItem from './PlaceItem/PlaceItem';

import AuthContext from '../../../Context/Auth/authContext';

const Places = ({ userId }) => {
	const authContext = useContext(AuthContext);
	const { token } = authContext;

	const [loading, setLoading] = useState(false);
	const [places, setPlaces] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`http://localhost:5000/api/places/user/${userId}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				// console.log(res.data);
				setPlaces(res.data.places);
				setLoading(false);
				setError(false);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(true);
			});
	}, []);

	const deletePlaceHandler = placeId => {
		setLoading(true);
		axios
			.delete(`http://localhost:5000/api/places/${placeId}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				console.log(res.data);
				setPlaces(places.filter(p => p._id !== placeId));
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	};

	if (loading) {
		return (
			<div className="text-center">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}

	if (places.length === 0 || error) {
		return (
			<div className="text-center">
				<h5>You don't have places yet, maybe start adding</h5>
			</div>
		);
	}

	return (
		<Fragment>
			{places.map(place => (
				<PlaceItem
					key={place._id}
					id={place._id}
					title={place.title}
					description={place.description}
					price={place.price}
					placeType={place.placeType}
					imageUrl={place.image}
					numOfBeds={place.numberOfbeds}
					numOfGuests={place.numberOfGuests}
					numOfRooms={place.numberOfRooms}
					address={place.address}
					onDeletePlace={deletePlaceHandler}
					loading={loading}
				/>
			))}
		</Fragment>
	);
};

export default Places;
