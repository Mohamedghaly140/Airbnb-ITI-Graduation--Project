import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import HouseIcon from '@material-ui/icons/House';
import RoomIcon from '@material-ui/icons/Room';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import WifiOutlinedIcon from '@material-ui/icons/WifiOutlined';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import { withRouter, Link } from 'react-router-dom';
import './AccommodationHost.css';
import DatePicker2 from '../DatePicker2/DatePicker2';
import GoogleMap2 from '../GoogleMap2/GoogleMap2';
import Card from '../Card/Card';
import Accomndation from '../Accomndation/Accomndation';
import ErrorModal from '../../ErrorModal/ErrorModal';

const AccommodationHost = ({ placeId }) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [place, setPlace] = useState({});
	const [showSearch, setShowSearch] = useState(false);
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');

	const showdate = search => {
		setShowSearch(search);
	};
	const start_Date = startdate => {
		setStart(startdate);
	};
	const end_Date = enddate => {
		setEnd(enddate);
	};

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/places/${placeId}`)
			.then(res => {
				// console.log(res.data);
				setPlace(res.data.place);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
	}, []);

	if (loading || !place || !place.creator) {
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center align-items-center vh-100">
					<Spinner animation="border" variant="primary" />
				</div>
			</React.Fragment>
		);
	}

	const {
		id,
		title,
		description,
		price,
		placeType,
		image,
		numberOfbeds,
		numberOfGuests,
		numberOfRooms,
		city,
		address,
		country,
		creator,
		isBooked,
	} = place;
	const styles = {
		width: 60,
		height: 100,
	};

	return (
		<>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}
			<div className=" container-fluid details-sec mt-3">
				<div className="row details-header justify-content-around">
					<div className="col-md-5 d-flex flex-column pl-5 mt-5 col-12">
						<div>
							<div class="row">
								<HouseIcon
									className="material-icons"
									style={{ fontSize: '32px' }}
								/>
								<h3 className="accHeader__title">{title}</h3>
							</div>
							<div className="ml-2 ">
								<AccountCircleIcon />
								<span>{`hosted by ${creator.firstName} ${creator.lastName} .`}</span>
							</div>
							<div className=" row ml-4 pl-2 ">
								<RoomIcon />
								<span>{`${city}, ${address}, ${country} .`}</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-12 text-center mb-3">
						<img
							className="accHeader__image img-fluid  rounded-lg"
							src={`${process.env.REACT_APP_BACKEND_URL}/${image}`}
							alt={title}
						/>
						<span
							style={{ fontWeight: '900' }}
						>{`${numberOfGuests} guests · ${numberOfbeds} bed · 1 bath .`}</span>
					</div>
				</div>
			</div>
			<div className="accHost container-fluid">
				<div className=" mainHost row">
					<div className="mainHost__AllDetails col-md-7 col-sm-12">
						<div className="mainHost__Details2 col-md-11 offset-md-1 ">
							<h4>
								{' '}
								<HomeOutlinedIcon /> {placeType}
							</h4>
							<p>You’ll have the casa particular (cuba) to yourself.</p>
							<hr />
							<h4>
								<NoteOutlinedIcon className="mr-1" />
								Cancellation policy
							</h4>
							<p>
								Add your trip dates to get the cancellation details for this
								stay.
							</p>
						</div>
						<hr className="hr1" />
						<div className="mainHost__Details3 col-md-11 offset-md-1">
							<p>{description}</p>
							<a className="font-weight-bold" href="/">
								Contact host
							</a>
						</div>
						<hr className="hr1" />
						<div className="mainHost__Details4 col-md-11 offset-md-1">
							<h4>Ammenities</h4>
							<div className="ammenities">
								<div className="row">
									<p className="col-6">
										<RestaurantOutlinedIcon className="mr-2" />
										Kitchen
									</p>
									<p className="col-6">
										<WifiOutlinedIcon className="mr-2" />
										Wifi
									</p>
								</div>
								<div className="row">
									<p className="col-6">
										<WbSunnyOutlinedIcon className="mr-2" />
										Heating
									</p>
									<p className="col-6">Iron</p>
								</div>
								<div className="row">
									<p className="col-6">Washer</p>
									<p className="col-6 ">
										<del>Carbon monoxide alarm</del>
									</p>
								</div>
							</div>
						</div>
					</div>
					<Card
						show={showdate}
						startValue={start}
						endValue={end}
						price={price}
						isBooked={isBooked}
						id={id}
					/>
					<div className="datePicker-card">
						{showSearch && (
							<DatePicker2 datestart={start_Date} dateend={end_Date} />
						)}
					</div>

					<hr className="hr-lg" />
				</div>
				<div className="reviews ">
					<h4>
						<LanguageIcon className="mr-2" />
						No reviews (yet)
					</h4>
					<p>
						We’re here to help your trip go smoothly. Every reservation is
						covered by
						<Link to="/terms">
							Airbnb’s
							<br /> Guest Refund Policy.
						</Link>
					</p>
				</div>
				{/* <hr className="hr-lg" /> */}
				<div className="location">
					<h4>Location</h4>
					<p className="accHost__location">
						{`${city}, ${address}, ${country} .`}
					</p>
				</div>
				<div className="container-fluid">
					<div className="row ">
						<GoogleMap2 />
					</div>
				</div>
			</div>
			<Accomndation creator={place.creator} />
		</>
	);
};

export default withRouter(AccommodationHost);
