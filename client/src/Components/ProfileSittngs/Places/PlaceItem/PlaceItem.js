import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import './PlaceItem.css';

const PlaceItem = props => {
	const {
		id,
		title,
		description,
		price,
		placeType,
		imageUrl,
		numOfBeds,
		numOfGuests,
		numOfRooms,
		address,
		loading,
		onDeletePlace,
	} = props;

	return (
		<div className="container card hostsCard shadow mb-3">
			<div className="row">
				<div className="col-4">
					<img
						className="img-thumbnail"
						src={`http://localhost:5000/${imageUrl}`}
						alt={title}
					/>
				</div>
				<div className="col-8">
					<div className="row">
						<div className="col-6">
							<h3> Name: {title}</h3>
							<p>
								<strong>Description:</strong> {description}
							</p>
							<p>
								<strong>Address:</strong> {address}
							</p>
							<p>
								<strong>price:</strong> {price} EGP{' '}
							</p>
						</div>
						<div className="col-6">
							<p>
								<strong>Rooms: </strong>
								{numOfRooms}
							</p>
							<p>
								{' '}
								<strong>Guests: </strong>
								{numOfGuests}
							</p>
							<p>
								<strong>Beds: </strong>
								{numOfBeds}
							</p>
							<p>
								<strong>Type:</strong>
								{placeType}
							</p>
						</div>
					</div>
				</div>
				<div className="col-12 d-flex align-items-center justify-content-end">
					{loading ? (
						<Spinner animation="border" variant="primary" />
					) : (
						<button
							className="btn btn-danger"
							onClick={() => onDeletePlace(id)}
						>
							Delete Place
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default PlaceItem;
