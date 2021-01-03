import React, { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import CardOne from '../hostCards/CardOne';
import CardTwo from '../hostCards/CardTwo';
import CardTree from '../hostCards/CardTree';
import CardFour from '../hostCards/CardFour';
import CardFive from '../hostCards/CardFive';
import SignUpModel from '../../signup/SignUpModale';

import { AuthContext } from '../../../Context/AuthContext';

function Host({ navbar }, props) {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const history = useHistory();

	const [loading, setLoading] = useState(false);

	//botstrap
	const [modalShow, setModalShow] = React.useState(false);
	const breakPoints = [
		{ width: 767, itemsToShow: 1 },
		{ width: 500, itemsToShow: 2 },
	];

	const getStardedHandler = () => {
		if (token) {
			axios
				.put(
					`${process.env.REACT_APP_BACKEND_URL}/api/users/host/${userId}`,
					{ isHost: true },
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${token}`,
						},
					}
				)
				.then(res => {
					console.log(res.data);
					setLoading(false);
					history.replace('/host_form');
				})
				.catch(err => {
					console.log(err);
					setLoading(false);
				});
		} else {
			setModalShow(true);
		}
	};

	return (
		<>
			{' '}
			<div className="container-fluid">
				<div className="row mt-5 pb-5 test">
					<div className="col-xl-4 col-md-5 col-12">
						<div className="host-container">
							<h1 className="host-header">Host your home on Airbnb</h1>
							<div className="host-details">
								<p className="host-parg">
									Join a vibrant community of hosts, create memorable
									experiences for travelers, and <br></br> earn money to pursue
									the things you love.
								</p>
							</div>
							<div
								className={
									navbar ? 'host-btn btn-trans fixed-top ' : 'host-btn '
								}
							>
								{loading ? (
									<Spinner animation="border" variant="danger" />
								) : (
									<button
										className={
											navbar
												? 'getstarted-btn getstarted-trans '
												: 'getstarted-btn '
										}
										variant="primary"
										onClick={getStardedHandler}
									>
										Get started
									</button>
								)}
								<SignUpModel
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
							</div>
						</div>
					</div>
					<div className="col-xl-7 col-md-7 col-12">
						<Carousel breakPoints={breakPoints}>
							<CardOne />
							<CardTwo />
							<CardTree />
							<CardFour />
							<CardFive />
						</Carousel>
					</div>
				</div>
			</div>
		</>
	);
}
export default Host;
