import React from 'react';

import image1 from '../../../assets/home_images/Online Experiences for the Holidays/image1.webp';
import image2 from '../../../assets/home_images/Online Experiences for the Holidays/image2.webp';
import image3 from '../../../assets/home_images/Online Experiences for the Holidays/image3.webp';
import image4 from '../../../assets/home_images/Online Experiences for the Holidays/image4.webp';

import ExperienceItem from './ExperienceItem/ExperienceItem';

const experiencesData = [
	{
		_id: 1,
		title: 'Enjoy Santa stories with a children’s book author',
		imageUrl: image1,
	},
	{
		_id: 2,
		title: 'Discover spiced wines with an archaeologist',
		imageUrl: image2,
	},
	{
		_id: 3,
		title: 'Sing Holiday songs with a Broadway star',
		imageUrl: image3,
	},
	{
		_id: 4,
		title: 'Cook pasta at home with Italian grandmas',
		imageUrl: image4,
	},
];

const Experiences = () => {
	return (
		<section className='py-5' style={{ backgroundColor: '#000' }}>
			<div className='Custom__Container'>
				<div className='row mx-0'>
					<div className='col-md-6 mb-4'>
						<ExperienceItem
							title='Enjoy Santa stories with a children’s book author'
							imageUrl={image1}
						/>
					</div>
					<div className='col-md-6'>
						<div className='row h-100 justify-content-between'>
							<div className='col-md-6 mb-4'>
								<ExperienceItem
									title='Discover spiced wines with an archaeologist'
									imageUrl={image2}
								/>
							</div>
							<div className='col-md-6 mb-4'>
								<ExperienceItem
									title='Sing Holiday songs with a Broadway star'
									imageUrl={image3}
								/>
							</div>
							<div className='col-md-12'>
								<ExperienceItem
									title='Cook pasta at home with Italian grandmas'
									imageUrl={image4}
									height='194px'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experiences;
