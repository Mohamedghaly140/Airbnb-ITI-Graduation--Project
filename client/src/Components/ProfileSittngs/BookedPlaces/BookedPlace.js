import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../Places/PlaceItem/PlaceItem.css';

const BookedPlace = props => {
	const {
		id,
		title,
		description,
		price,
		placeType,
		city,
		address,
		loading,
		onDeletePlace,
	} = props;

	return (
		<div className="container hostsCard shadow mb-3">
			<div className="row">
				<div className=" col-md-7 col-12">
					<div className="desc__header">
						<p className="pt-2">{`${placeType} in ${city}`}</p>
						<h5>{title}</h5>
					</div>
					<hr style={{ width: '8%', marginLeft: 0 }} />
					<div className="desc__info">
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
							className="btn btn-danger mr-2"
							onClick={() => onDeletePlace(id)}
						>
							Cancel Book
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default BookedPlace;
