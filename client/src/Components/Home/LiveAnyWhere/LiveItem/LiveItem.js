import React from 'react';

const LiveItem = ({ title, imageUrl }) => {
	return (
		<>
			<div className='d-flex flex-column justify-content-start align-items-center mb-2'>
				<div className='image mb-2'>
					<img
						style={{ borderRadius: '10px' }}
						className='img-fluid'
						src={imageUrl}
						alt={title}
					/>
				</div>
				<div className='d-flex justify-content-start align-items-center w-100'>
					<h5>{title}</h5>
				</div>
			</div>
		</>
	);
};

export default LiveItem;
