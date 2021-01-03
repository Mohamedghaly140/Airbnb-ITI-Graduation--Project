import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import Header2 from '../../Pages/Header/Header';
import GoogleMap2 from './GoogleMap2/GoogleMap2';
import SearchResults from './SearchResults/SearchResults';
import './SearchResults/SearchResults.css';
import Footer from '../../Pages/Footer/Footer';
import '../../Pages/Footer/Footer.css';

const AfterSearch = ({ search }) => {
	console.log('AfterSearch', search);

	const { location, guests, start, end } = search;

	const [searchResultsList, setSearchResultsList] = useState(null);
	const [loading, setLoading] = useState(false);
	const lat = 31.0532818;
	const lng = 31.4113196;
	//for testing lng and lat

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/places/?city=${location}`)
			.then(res => {
				setSearchResultsList(res.data.places);
			})

			.catch(err => {
				console.log(err);
			});
	}, [location]);

	if (!searchResultsList) {
		return (
			<React.Fragment>
				<div className="d-flex justify-content-center align-items-center vh-100">
					<Spinner animation="border" variant="primary" />
				</div>
			</React.Fragment>
		);
	}

	return (
		<>
			<Header2 />
			{searchResultsList.length === 0 ? (
				<div className="text-center text-danger py-5">
					<h5 className="text-center py-5">No Places Found</h5>
				</div>
			) : (
				<div className="row search__results">
					<SearchResults searchResultsList={searchResultsList} />
					<div className="col-md-5 col-12">
						<GoogleMap2 mapInputs={{ lat, lng }} />
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default AfterSearch;
