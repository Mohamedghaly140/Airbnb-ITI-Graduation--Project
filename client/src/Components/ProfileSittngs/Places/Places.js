import React, { Fragment, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import PlaceItem from './PlaceItem/PlaceItem';

import { AuthContext } from '../../../Context/AuthContext';
import ErrorModal from '../../ErrorModal/ErrorModal';

const Places = ({ userId }) => {
	const authContext = useContext(AuthContext);
	const { token } = authContext;

	const [loading, setLoading] = useState(false);
	const [places, setPlaces] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/places/user/${userId}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				// console.log(res.data);
				setPlaces(res.data.places);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
	}, []);

	const deletePlaceHandler = placeId => {
		setLoading(true);
		axios
			.delete(`${process.env.REACT_APP_BACKEND_URL}/api/places/${placeId}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			})
			.then(res => {
				// console.log(res.data);
				setLoading(false);
				setError(null);
				setPlaces(places.filter(p => p._id !== placeId));
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
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
				<h5>
					You don't have places yet, maybe start{' '}
					<Link to="/host_form">adding</Link>
				</h5>
			</div>
		);
	}

	return (
		<Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}
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
					city={place.city}
					onDeletePlace={deletePlaceHandler}
					loading={loading}
				/>
			))}
		</Fragment>
	);
};

export default Places;
