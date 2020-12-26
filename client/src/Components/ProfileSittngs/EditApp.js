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

let date = new Moment('1993-08-03', 'YYYY-MM-DD').props;

function EditApp() {
	const authContext = useContext(AuthContext);
	const { userId } = authContext;
	const [navbar, setNavbar] = useState(false);
	const [firstNameState, firstnameSet] = useState('Ahmed');
	const [lastNameState, lastnameSet] = useState('Salah');
	const [emailStat, setEmail] = useState('salaheltantawy@gmail.com');
	const [emailtState, enailtSet] = useState('salaheltantawy@gmail.com');
	const [phoneState, phoneSet] = useState('01005475265');
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
			<HostHeader navbar={navbar} setNavbar={setNavbar} />
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
			</Router>
		</>
	);
}

export default EditApp;
