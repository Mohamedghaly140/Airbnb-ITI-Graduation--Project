import React, { useState } from 'react';
import {  Alert } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import { withRouter, useRouteMatch } from 'react-router-dom';

const HeaderCenter = props => {
  const [error, setError] = useState(null);
	const [showSearch, setShowSearch] = useState(false);
	const [location, setLocation] = useState('');
	const [guests, setGuests] = useState('');
	const [date, setDate] = useState({ startValue: '', endValue: '' });

	const route = useRouteMatch();

	const clickHandler = () => {
		setShowSearch(!showSearch);
		props.show(!showSearch);
		// console.log(showSearch);
	};
	const locationHandler = e => {
		setLocation(e.target.value);
	};
	const guestsHandler = e => {
		setGuests(e.target.value);
	};
	const dateHandler = e => {
		const name = e.target.name;
		setDate({
			...date,
			[name]: e.target.value,
		});
		// console.log(date);
	};
	// const history = useHistory();

	const openSearchResults = () => {
    // console.log(props);
    if(!location || !date|| !guests || guests=="0"){
      setError("Please enter correct values into inputs field ");
      return
    }
		if (route.path === '/search_results') {
			props.onSearch(location, guests);
		} else {
			props.onSearch(location, guests);
			props.history.push('/search_results');
		}
	};

	return (
    <>
      <div className="header2__center ">
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )}
        <div className="header2__center__search">
          <input
            type="text"
            placeholder="Where are you going?"
            name="location"
            value={location}
            onChange={locationHandler}
            style={{ background: "none" }}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check in"
            onClick={clickHandler}
            value={props.startValue}
            onChange={dateHandler}
          />
          <input
            type="text"
            placeholder="Add dates"
            name="check out"
            onClick={clickHandler}
            value={props.endValue}
            onChange={dateHandler}
          />
          <input
            type="text"
            placeholder="Add guests"
            name="guests"
            value={guests}
            onChange={guestsHandler}
          />
          {/* <Link to="/search_results"> */}
          <SearchIcon
            className="header2__center__search__searchIcon p-1 mr-1"
            onClick={openSearchResults}
          />
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default withRouter(HeaderCenter);
