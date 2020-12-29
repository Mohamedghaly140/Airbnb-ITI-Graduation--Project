import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
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

const AccommodationHost = ({ id }) => {
	const [loading, setLoading] = useState(false);
	const [place, setPlace] = useState({});
	const [showSearch, setShowSearch] = useState(false);
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const [acc, setacc] = useState({});
	const showdate = search => {
		setShowSearch(search);
	};
	const start_Date = startdate => {
		setStart(startdate);
	};
	const end_Date = enddate => {
		setEnd(enddate);
	};

	console.log(id);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/places/${id}`)
			.then(res => {
				console.log(res.data);
				setPlace(res.data.place);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (loading || !place || !place.creator) {
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center align-items-center">
					<Spinner animation="border" variant="primary" />
				</div>
			</React.Fragment>
		);
	}

	const {
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
	} = place;

	return (
		//and here we use acc state
		<>
			<div className="accHeader container mt-3">
				<h3>{title}</h3>
				<p className="accHeader__location">
					{`${city} ${address}, ${country}`}
				</p>
				<br />
				<img
					className="accHeader__image img-fluid .max-width: 100% rounded-lg"
					src={`${process.env.REACT_APP_BACKEND_URL}/${image}`}
					alt={title}
				/>
			</div>
			<div className="accHost container-fluid">
				<div className=" mainHost row">
					<div className="mainHost__AllDetails col-md-7 col-sm-12">
						<div className="row mainHost__Details1 offset-md-1">
							<div className="col-md-5  ">
								<h3>
									{`${title} hosted by ${creator.firstName} ${creator.lastName}`}
								</h3>
								<p>{`${numberOfGuests} guests · ${numberOfbeds} bed · 1 bath`}</p>
							</div>
							<div className="col-md-5 offset-md-2">
								<AccountCircleIcon />
							</div>
						</div>

						<hr className="hr1" />
						<div className="mainHost__Details2 col-md-11 offset-md-1 ">
							<h3>
								{' '}
								<HomeOutlinedIcon /> {placeType}
							</h3>
							<p>You’ll have the casa particular (cuba) to yourself.</p>
							<h3>
								<NoteOutlinedIcon className="mr-1" />
								Cancellation policy
							</h3>
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
							<h3>Ammenities</h3>
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
								<button className="btn btn-light btn-amenities">
									Show all 6 amenities
								</button>
							</div>
						</div>
						{/* <hr className="hr1" /> */}
						{/* <div className="datePicker2 col-11 offset-1">
            <DatePicker2 datestart={start_Date} dateend={end_Date} />
          </div> */}
					</div>
					<Card
						show={showdate}
						startValue={start}
						endValue={end}
						price={price}
					/>
					<div className="datePicker-card">
						{showSearch && (
							<DatePicker2 datestart={start_Date} dateend={end_Date} />
						)}
					</div>

					<hr className="hr-lg" />
				</div>
				<div className="reviews ml-5">
					<h3>
						<LanguageIcon className="mr-2" />
						No reviews (yet)
					</h3>
					<p>
						We’re here to help your trip go smoothly. Every reservation is
						covered by
						<Link to="/terms">
							Airbnb’s
							<br /> Guest Refund Policy.
						</Link>
					</p>
				</div>
				<hr className="hr-lg" />
				<div className="mt-3 ml-5">
					<h3>Location</h3>
					<p className="accHost__location">
						Mansoura Qimd 2, Dakahlia Governorate, Egypt
					</p>
				</div>

				<GoogleMap2 />
			</div>
			<Accomndation creator={place.creator} />
		</>
	);
};

export default withRouter(AccommodationHost);
