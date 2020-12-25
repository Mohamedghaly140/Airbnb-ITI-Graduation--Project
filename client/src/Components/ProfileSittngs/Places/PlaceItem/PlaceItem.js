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
		<div className="container hostsCard shadow mb-3">
			<div className="row">
				<div className="col-4 d-flex justify-content-center align-items-center">
					<img
						className="img-thumbnail"
						src={`http://localhost:5000/${imageUrl}`}
						alt={title}
					/>
				</div>
				<div className="desc col-7">
					<div className="desc__header">
						<p>{placeType} in Dahab</p>
						<h5>{title}</h5>
					</div>
					<hr style={{ width: '8%', marginLeft: 0 }} />
					<div className="desc__info">
						<div className="row ml-1">
							<p>{numOfGuests} guests.</p>
							<p>{numOfRooms} bedroom.</p>
							<p>{numOfBeds} bed.</p>
						</div>
						<div className="ml-1 mt-0">
							<div>Description: {description}</div>
							<p>address: {address}</p>
							<p className="text-muted">{price} EGP/day</p>
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
