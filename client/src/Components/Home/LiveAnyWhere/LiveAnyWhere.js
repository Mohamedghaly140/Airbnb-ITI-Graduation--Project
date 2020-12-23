import React from 'react';

// Image
import image1 from '../../../assets/home_images/Live anywhere/Entire-homes.webp';
import image2 from '../../../assets/home_images/Live anywhere/Cabins-and-cottages.webp';
import image3 from '../../../assets/home_images/Live anywhere/Unique-stays.webp';
import image4 from '../../../assets/home_images/Live anywhere/Pets welcome.webp';

// LiveItem Component
import LiveItem from './LiveItem/LiveItem';

const LiveAnyWhereData = [
	{ _id: 1, title: 'Entire homes', imageUrl: image1 },
	{ _id: 2, title: 'Cabins and cottages', imageUrl: image2 },
	{ _id: 3, title: 'Unique stays', imageUrl: image3 },
	{ _id: 4, title: 'Pets welcome', imageUrl: image4 },
];

const LiveAnyWhere = () => {
	return (
		<div className='Custom__Container py-1'>
			<div className='container-fluid'>
				<h2 className='mb-4'>Live anywhere</h2>
			</div>
			<div className='row mx-0'>
				{LiveAnyWhereData.map(item => {
					return (
						<div
							className='col-sm-6 col-md-6 col-lg-3'
							key={item._id}
						>
							<LiveItem
								title={item.title}
								imageUrl={item.imageUrl}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default LiveAnyWhere;
