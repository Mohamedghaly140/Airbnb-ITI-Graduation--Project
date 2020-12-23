import React from 'react';
import classes from './ExperienceItem.module.css';

const ExperienceItem = ({ title, imageUrl, height, bottom}) => {
	return (
		<div className={classes.ExperienceItem}>
			<div
				className='overflow-hidden h-100'
				style={{ height: height }}
			>
				<img className='img-fluid' src={imageUrl} alt={title} />
			</div>
			<div className={classes.ExperienceItem__Title} style={{bottom: bottom}}>{title}</div>
		</div>
	);
};

export default ExperienceItem;
