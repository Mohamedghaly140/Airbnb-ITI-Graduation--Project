import React, { useState, useContext } from 'react';
import axios from 'axios';
import ListCountries from './ListCountries';
import './ListSpace.css';
import HostPlace from './host_details/HostPlace';
import HostGuest from './host_details/HostGuest';
import ChooseProprity from './host_details/ChooseProprity';
import NumOfBed from './host_details/NumOfBed';
import NumOfBedrooms from './host_details/NumOfBedrooms';
import CityState from './host_details/CityState';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Upload from './ImageUploader';

import { AuthContext } from '../../Context/AuthContext';

function ListSpace() {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	// *****validation**********//
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const [img, setImg] = useState();
	const image = img => {
		setImg(img);
	};
	const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	const postData = async dataForm => {
		const formData = new FormData();
		formData.append('title', dataForm.title);
		formData.append('description', dataForm.description);
		formData.append('numberOfGuests', dataForm.numberOfGuests);
		formData.append('numberOfRooms', dataForm.numberOfRooms);
		formData.append('numberOfbeds', dataForm.numberOfbeds);
		formData.append('placeType', dataForm.placeType);
		formData.append('price', dataForm.price);
		formData.append('address', dataForm.address);
		formData.append('image', dataForm.image);
		formData.append('creator', userId);

		// console.log(formData);

		try {
			const res = await axios.post(
				'http://localhost:5000/api/places',
				formData,
				{
					header: {
						'Content-Type': 'application/json',
					},
				}
			);

			console.log(res);
			history.push('/');
		} catch (err) {
			console.log(err.message);
		}
	};
	//*****print data in console*******
	const onSubmitHandler = data => {
		data.image = img;
		postData(data);
	};
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 col-md-12 ">
					<div className="acco-container">
						<div className="acco-header">
							<h2>Hi, there! Let’s get started listing your space.</h2>
						</div>
						<div className="steps">
							<br />
							<h3>What kind of place do you have?</h3>
						</div>
						<form onSubmit={handleSubmit(onSubmitHandler)}>
							{/* place-guest */}
							<div className="place-guest">
								<div className="host-place">
									<HostPlace register={register} />
								</div>

								{/* host-guest */}
								<div className="host-guest">
									<HostGuest counter={counter} register={register} />
								</div>
							</div>

							{/* Choose a property type */}

							{/* bedrooms */}
							<div className="bedrooms">
								<NumOfBedrooms counter={counter} register={register} />
							</div>

							{/* Number of beds  */}
							<NumOfBed counter={counter} register={register} />

							{/* Location  */}

							{/* City and State  */}

							{/* address */}

							{/* Accomedation Details */}

							<h5 className="acco-details">Accomedation Details</h5>

							<div className="place-guest">
								<input
									type="text"
									name="title"
									placeholder="Title"
									id="Adress"
									ref={register({ required: true })}
								/>
							</div>
							<div className="place-guest">
								<input
									type="text"
									name="address"
									placeholder="Address"
									id="Adress"
									ref={register({ required: true })}
								/>
							</div>
							<div className="city-state pt-2">
								<div className="price-input">
									<input
										type="number"
										name="price"
										placeholder="Price Per Nigth $"
										ref={register({ required: true })}
									/>
								</div>
							</div>

							<div className="place-guest">
								<input
									type="text"
									name="description"
									placeholder="Describtion"
									id="Describe"
									ref={register({ required: true })}
								/>
								{/* <button className="btn btn-primary ml-1">
									Upload You Place Image
								</button> */}
								<Upload image={image} />
							</div>

							{/* Continue btn  */}
							<input
								type="submit"
								value="Continue"
								className="btn btn-primary"
							/>
						</form>
					</div>
				</div>
				<div className="col-lg-5 d-md-none d-xl-flex flower-img">
					<img
						src="https://a0.muscache.com/airbnb/static/packages/start.b12a70f6.png"
						alt="Flower pic"
						className="img-fluid"
					/>
				</div>
			</div>
		</div>
	);
}

export default ListSpace;
