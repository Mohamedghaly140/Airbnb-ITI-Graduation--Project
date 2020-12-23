import React from 'react';
import Card from '../LiveAnyWhere/LiveItem/LiveItem';

import image1 from '../../../assets/home_images/Join millions of hosts on Airbnb/Host-your-home.webp';
import image2 from '../../../assets/home_images/Join millions of hosts on Airbnb/Host-an-Online-Experience.webp';
import image3 from '../../../assets/home_images/Join millions of hosts on Airbnb/Host-an-Experience.webp';

const JionUsData = [
	{ _id: 1, title: 'Host your home', imageUrl: image1 },
	{ _id: 2, title: 'Host an Online Experience', imageUrl: image2 },
	{ _id: 3, title: 'Host an Experience', imageUrl: image3 },
];

const JionUs = () => {
	return (
		<section className='pb-5 pt-2'>
			<div className='Custom__Container'>
				<h2 className='mb-4'>Join millions of hosts on Airbnb</h2>
				<div className='row mx-0'>
					{JionUsData.map(item => {
						return (
							<div className='col-md-4' key={item._id}>
								<Card
									title={item.title}
									imageUrl={item.imageUrl}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default JionUs;
