import React, { Fragment } from 'react';

import Banner from '../Components/Home/Banner/Banner';
import Covid from '../Components/Home/Covid/Covid';
import LiveAnyWhere from '../Components/Home/LiveAnyWhere/LiveAnyWhere';
import Places from '../Components/Home/Places/Places';
import Header from './Header/Header'
import Footer  from "../Pages/Footer/Footer";
import Experiences from '../Components/Home/Experiences/Experiences';
import Gift from '../Components/Home/Gift/Gift';
import JionUs from '../Components/Home/JionUs/JionUs';
import { Link } from 'react-router-dom';
import NavbarDown from '../Components/Home/Navbar/NavbarDown';

const Home = (props) => {

	const onSearch =(location , guests , start , end)=>{
		props.onSearch(location, guests ,start ,end)
	}
	return (
		<Fragment>
			<Covid />
			<Header onSearch={onSearch}/>
			<Banner />
			<Places />
			<LiveAnyWhere />
			<Experiences />
			<Gift />
			<JionUs />
			<Footer />
			<NavbarDown/>
		</Fragment>
	);
};

export default Home;
