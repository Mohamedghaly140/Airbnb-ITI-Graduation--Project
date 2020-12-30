import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import {
	BrowserRouter as Router,
	Route,
	useRouteMatch,
} from 'react-router-dom';
import CardList from './cardList';
import Personal from './edit/personal_1';
import Login from './edit/Login';
import Payments from './edit/Payments ';
import Password from './edit/Password';
import ConfirmPayment from '../confirmPayment/ConfirmPayment';
import HostHeader from '../BecomHost/HostHeader/HostHeader';
import { AuthContext } from '../../Context/AuthContext';
import ListSpace from '../accom_after_host/ListSpace';
import UpdateProfile from '../accom_after_host/UpdateProfile';
import Home from '../../Pages/Home';

let date = new Moment('1993-08-03', 'YYYY-MM-DD').props;

function EditApp() {
	//navbar
	const [navbar, setNavbar] = useState(false);
	const authContext = useContext(AuthContext);
	const { userId } = authContext;
	const [firstNameState, firstnameSet] = useState('');
	const [lastNameState, lastnameSet] = useState('');
	const [emailStat, setEmail] = useState('');
	const [emailtState, enailtSet] = useState('');
	const [phoneState, phoneSet] = useState('');
	const [BDState, BDset] = useState(date);
	const [gender, setGender] = useState('');
	const [isLoading, setIsloading] = useState(false);
	// console.log(date);

	useEffect(() => {
		setIsloading(true);
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/${userId}`)
			.then(res => {
				console.log(res.data.user);
				const user = res.data.user;
				const { firstName, lastName, email, phone, birthDay, gender } = user;
				firstnameSet(firstName);
				lastnameSet(lastName);
				setEmail(email);
				enailtSet(email);
				phoneSet(phone);
				BDset(birthDay);
				setGender(gender);
				setIsloading(false);
			})
			.catch(err => console.log(err));
	}, []);

	let { path } = useRouteMatch();
	return (
		<>
			{/* <HostHeader > */}
			<Router>
				<Route
					path={`${path}/edit`}
					exact
					component={() => (
						<CardList
							firstNameState={firstNameState}
							lastNameState={lastNameState}
							email={emailtState}
							isLoading={isLoading}
						/>
					)}
				/>
				<Route
					path={`${path}/edit/personal`}
					exact
					component={() => (
						<Personal
							firstNameState={firstNameState}
							setFirst={firstnameSet}
							setLast={lastnameSet}
							lastNameState={lastNameState}
							email={emailStat}
							date={BDState}
							BDset={BDset}
							setEmail={setEmail}
							phoneState={phoneState}
							phoneSet={phoneSet}
							gender={gender}
						/>
					)}
				/>
				<Route
					path={`${path}/edit/Payments`}
					component={() => <Payments />}
					exact
				/>
				<Route path={`${path}/edit/login`} component={Login} />
				<Route path={`${path}/edit/login/password`} component={Password} />
				<Route path={`${path}/ConfirmPayment`} component={ConfirmPayment} />
				<Route path="/host_form" component={ListSpace} />
				<Route path="/" component={Home} exact />
				<Route path="/update/:id" component={UpdateProfile} />
			</Router>
		</>
	);
}

export default EditApp;
