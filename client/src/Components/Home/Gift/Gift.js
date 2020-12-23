import React from 'react';
import classes from './Gift.module.css';

const Gift = () => {
	return (
		<section className='py-5'>
			<div className='Custom__Container py-4'>
				<div className={classes.Card}>
					<div className={classes.Caption}>
						<div className={classes.Caption__Title}>
							<h1>
								Still after that <br /> perfect gift?
							</h1>
							<p>Surprise them with an Airbnb gift card.</p>
						</div>
						<div className='d-flex justify-content-start align-items-center'>
							<button className='btn btn-light btn-lg'>
								Learn more
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gift;
