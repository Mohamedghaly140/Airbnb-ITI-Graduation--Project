import React, { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import './ListSpace.css';
import HostPlace from './host_details/HostPlace';
import HostGuest from './host_details/HostGuest';
import ChooseProprity from './host_details/ChooseProprity';
import NumOfBed from './host_details/NumOfBed';
import NumOfBedrooms from './host_details/NumOfBedrooms';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Upload from './ImageUploader';

import { AuthContext } from '../../Context/AuthContext';
import ErrorModal from '../ErrorModal/ErrorModal';

function ListSpace() {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// *****validation**********//
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const [img, setImg] = useState();
	const image = img => {
		setImg(img);
	};
	const counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

	const postData = async dataForm => {
		setLoading(true);

		const formData = new FormData();
		formData.append('title', dataForm.title);
		formData.append('description', dataForm.description);
		formData.append('numberOfGuests', dataForm.numberOfGuests);
		formData.append('numberOfRooms', dataForm.numberOfRooms);
		formData.append('numberOfbeds', dataForm.numberOfbeds);
		formData.append('placeType', dataForm.placeType);
		formData.append('price', dataForm.price);
		formData.append('address', dataForm.address);
		formData.append('city', dataForm.city);
		formData.append('image', dataForm.image);
		formData.append('creator', userId);

		try {
			const res = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/api/places`,
				formData,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);

			setLoading(false);
			setError(null);
			history.push('/');
		} catch (err) {
			setLoading(false);
			setError(err.response.data.message);
		}
	};
	//*****print data in console*******
	const onSubmitHandler = data => {
		data.image = img;
		postData(data);
	};
	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}
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
							<form className="pb-3" onSubmit={handleSubmit(onSubmitHandler)}>
								{/* place-guest */}
								<div className="place-guest row">
									<div className="host-place col-sm-6 col-12">
										<HostPlace register={register} />
									</div>

									{/* host-guest */}
									<div className="host-guest col-sm-6 col-12">
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
								<div className="place-guest">
									<input
										type="text"
										name="city"
										placeholder="City"
										id="City"
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

								<div className="place-guest row">
									<div className="col-sm-6 col-12">
										<input
											type="text"
											name="description"
											placeholder="Describtion"
											id="Describe"
											ref={register({ required: true })}
										/>
									</div>
									<div className="col-sm-6 col-12">
										<Upload image={image} />
									</div>
								</div>

								{/* Continue btn  */}
								<div className="col-12">
									{loading ? (
										<React.Fragment>
											<div className="text-center">
												<Spinner animation="border" variant="primary" />
											</div>
										</React.Fragment>
									) : (
										<input
											type="submit"
											value="Continue"
											className="btn btn-primary container-fluid"
										/>
									)}
								</div>
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
		</React.Fragment>
	);
}

export default ListSpace;
