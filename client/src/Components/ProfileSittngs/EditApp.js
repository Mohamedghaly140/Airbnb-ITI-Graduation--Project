import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import {
	BrowserRouter as Router,
	Route,
	useRouteMatch,
	Link
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
import Footer from "../../Pages/Footer/Footer"

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
		<div className="black-logo ">
        <Link to="/">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Airbnb"
            role="img"
            focusable="false"
            className="black-logo-svg"
            style={{
              height: "36px",
              width: "36px",
              marginTop: "1.5rem",
              marginLeft: "1.5rem",
            }}
          >
            <path d="m16.5 1c2.008085 0 3.4632027.96283388 4.7513779 3.26849971l.5326477 1.02546647c1.9537557 3.83047524 6.1137915 12.53917462 7.0991575 14.83626342l.1462392.3528118c.666849 1.5911597.9089331 2.4721983.9588638 3.3963643l.0112155.4148361c.0004984.0616776.0004984.134022.0004984.2274973 0 4.0620396-2.8764539 6.4782609-6.3571429 6.4782609-2.2243943 0-4.5558538-1.2577296-6.7085498-3.3861099l-.2574471-.25956-.1718602-.1793301h-.011l-.1755759.1847983c-2.0445114 2.1008154-4.2677042 3.4208856-6.41432039 3.6152501l-.27953818.0189396-.26742267.006012c-3.48068898 0-6.35714286-2.4162213-6.35714286-6.4782609l.00454695-.468363c.0267153-.9288567.22966104-1.7682114.83130912-3.2441913l.21547951-.5238937c.96518694-2.298134 6.08242852-12.98926921 7.70666272-16.03396302 1.278799-2.2884942 2.7339167-3.25132808 4.7420017-3.25132808zm0 2c-1.2386682 0-2.0526703.53861541-2.9867173 2.20976115l-.5236826 1.00849692c-1.9253014 3.77609709-6.05944731 12.43033983-7.03072523 14.69152843l-.34466233.836533c-.42741793 1.0708881-.57302322 1.6541875-.60525859 2.2390305l-.00853405.3300843c-.0004199.0548485-.0004199.1205531-.0004199.2063048 0 2.8727431 1.91133076 4.4782609 4.35714286 4.4782609 1.77322614 0 3.86957714-1.2360441 5.83116174-3.3543075-2.2950884-2.9375996-3.8549713-6.449937-3.8549713-8.9088504 0-2.9133611 1.9323483-5.3862954 5.1774304-5.4209947 3.2235547.0346993 5.155903 2.5076336 5.155903 5.4209947 0 2.4547692-1.5546293 5.9594145-3.8549699 8.9062679 1.9648698 2.1227832 4.0593243 3.35689 5.8311603 3.35689 2.4458121 0 4.3571429-1.6055178 4.3571429-4.4782609l-.0037202-.4108638c-.0193133-.671496-.1709867-1.2953427-.7139685-2.6202181l-.2488229-.5997251c-1.064789-2.4778253-5.9928845-12.7679933-7.5373949-15.66399932-.9434232-1.68831737-1.7574253-2.22693278-2.9960935-2.22693278zm.0107637 10.3157316c-2.0107259.021644-3.1774304 1.514741-3.1774304 3.4211105 0 1.796356 1.1790231 4.5797683 2.9544726 7.0428415l.2101941.2873164.174104-.2339736c1.7298707-2.3850145 2.8981786-5.0656085 2.9888755-6.8746747l.0056872-.2215096c0-1.9063695-1.1667045-3.3994665-3.155903-3.4211105z"></path>
          </svg>
        </Link>
        <p className="airbnbTitle">airbnb</p>
      </div>
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
							setGender={setGender}
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
			<Footer/>
		</>
	);
}

export default EditApp;
