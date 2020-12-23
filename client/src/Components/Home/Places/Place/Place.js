import React from 'react';

import imageUrl1 from '../../../../assets/home_images/places/imageUrl1.jpg'

const Place = ({ title, imageUrl, arriveTime }) => {
	return (
		<div className='row no-gutters mb-3 mx-0'>
			<div className='col-4 col-md-3 d-flex justify-content-center align-items-center'>
				<img
					className='img-fluid'
					style={{ borderRadius: '10px' }}
					src={imageUrl}
					alt={title}
				/>
			</div>
			<div className='col-8 col-md-7 d-flex justify-content-center align-items-center'>
				<div className='d-flex flex-column justify-content-center align-items-start'>
					<h6
						className='text-capitalize mb-0'
						style={{ fontWeight: '500' }}
					>
						{title}
					</h6>
					<p className='mb-0' style={{ whiteSpace: 'nowrap' }}>
						{arriveTime} hour drive
					</p>
				</div>
			</div>
		</div>
	);
};

export default Place;
