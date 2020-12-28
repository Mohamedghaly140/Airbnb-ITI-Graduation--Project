import React, { Fragment } from 'react';
import NavbarDown from '../Navbar/NavbarDown';
import classes from './Banner.module.css';

const Banner = () => {
	return (
		<Fragment>
			<div className={classes.Banner}>
				<div className={classes.Caption}>
					<h1 className={classes.Caption__Title}>
						Go <br /> Near
					</h1>
					<button className='btn btn-light btn-sm font-weight-bold'>
						Explore nearby stays
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default Banner;
