import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import './SearchResults.css';

import { AuthContext } from '../../../Context/AuthContext';
import ErrorModal from '../../ErrorModal/ErrorModal';

const SearchResultItem = props => {
	const authContext = useContext(AuthContext);
	const { token } = authContext;

	const [error, setError] = useState(null);

	const history = useHistory();

	const {
		id,
		title,
		price,
		placeType,
		imageUrl,
		numOfBeds,
		numOfGuests,
		numOfRooms,
		city,
	} = props;

	const detailHandler = () => {
		if (token) {
			history.push(`/accommodation/${id}`);
		} else {
			setError('You need to login first');
		}
	};

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}

			<Link
				onClick={detailHandler}
				style={{ textDecoration: 'none', color: 'black' }}
			>
				<div className="mCard row mb-3 mt-4 p-3 border-top border-bottom">
					<div className="mslider col-sm-12 col-md-4 ml-1">
						<img
							className="img-fluid acco-img"
							src={`${process.env.REACT_APP_BACKEND_URL}/${imageUrl}`}
							alt={title}
						/>
					</div>
					<div className=" col-xl-7 col-12">
						<div className="desc__header">
							<p>
								{placeType} in {city}
							</p>
							<h5>{title}</h5>
						</div>
						<div className="desc__info">
							<div className="row ml-1">
								<p>{numOfGuests} guests.</p>
								<p>{numOfRooms} bedroom.</p>
								<p>{numOfBeds} bed.</p>
								<p>1 bath</p>
							</div>
							<div className="row ml-1 mt-0">
								<p>Wifi.</p>
								<p>Kitchen</p>
								<p>Air condetion</p>
							</div>
						</div>
						<div className="rate mt-4">
							<div className="row ml-1" style={{ float: 'left' }}>
								<StarOutlinedIcon
									style={{ color: 'red', marginTop: '0.3em' }}
								/>
								<p>4.66</p>
							</div>
							<div className="row ml-1 " style={{ float: 'right' }}>
								<AttachMoneyOutlinedIcon
									style={{ color: 'black', marginTop: '0.3em' }}
								/>
								<p>{price} L.E / night</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</React.Fragment>
	);
};

export default SearchResultItem;
