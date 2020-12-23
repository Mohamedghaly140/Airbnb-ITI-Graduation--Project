import React, { Fragment } from 'react';
import classes from './Places.module.css';

import Place from './Place/Place';

// import placesData from '../../Data/places.json';

import image1 from '../../../assets/home_images/places/imageUrl1.jpg';
import image2 from '../../../assets/home_images/places/imageUrl2.jpg';
import image3 from '../../../assets/home_images/places/imageUrl3.jpg';
import image4 from '../../../assets/home_images/places/imageUrl4.jpg';
import image5 from '../../../assets/home_images/places/imageUrl5.jpg';
import image6 from '../../../assets/home_images/places/imageUrl6.jpg';
import image7 from '../../../assets/home_images/places/imageUrl7.jpg';
import image8 from '../../../assets/home_images/places/imageUrl8jpg.webp';

const placesData = [
	{
		_id: 1,
		imageUrl: image1,
		title: 'Hurghada',
		arriveTime: 2.5,
	},
	{
		_id: 2,
		imageUrl: image2,
		title: 'Dahab',
		arriveTime: 7,
	},
	{
		_id: 3,
		imageUrl: image3,
		title: 'Sharm El-Sheikh',
		arriveTime: 6.5,
	},
	{
		_id: 4,
		imageUrl: image4,
		title: 'Marina El Alamein',
		arriveTime: 3.5,
	},
	{
		_id: 5,
		imageUrl: image5,
		title: 'Ras Sedr',
		arriveTime: 2.5,
	},
	{
		_id: 6,
		imageUrl: image6,
		title: 'Sidi Abd El-Rahman',
		arriveTime: 4,
	},
	{
		_id: 7,
		imageUrl: image7,
		title: 'Safaga',
		arriveTime: 6,
	},
	{
		_id: 8,
		imageUrl: image8,
		title: 'Marsa Matruh',
		arriveTime: 6.5,
	},
];

const Places = () => {
	return (
		<section className='py-5'>
			<div className='Custom__Container'>
				<div className='row mx-0'>
					{placesData.map(place => {
						return (
							<Fragment key={place._id}>
								<div className='col-12 col-sm-6 col-md-4 col-lg-3'>
									<Place
										imageUrl={place.imageUrl}
										title={place.title}
										arriveTime={place.arriveTime}
									/>
								</div>
							</Fragment>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Places;
