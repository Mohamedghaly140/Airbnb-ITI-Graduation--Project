import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../Personal.css';

import { AuthContext } from '../../../../Context/AuthContext';
import ErrorModal from '../../../ErrorModal/ErrorModal';

let DOB = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	//birth day
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			birthDay: props.DOB,
		},
	});

	const onSubmit_3 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/birth-day/${userId}`,
				data,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				// console.log(res.data);
				props.BDset(res.data.birthDay);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
		DOBSet(!DOBEditState);
	};

	const [DOBEditState, DOBSet] = useState(false);

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}

			<div className="DOB">
				<span className="font-weight-bold">Date of birth</span>
				<span
					role="button"
					className="float-right edit"
					onClick={e => {
						DOBSet(!DOBEditState);
					}}
				>
					{loading ? <Spinner animation="border" variant="primary" /> : 'Edit'}
				</span>
				{DOBEditState ? (
					<div className="DOB-edit mt-2">
						<form action="/#" onSubmit={handleSubmit(onSubmit_3)}>
							<input
								type="date"
								name="birthDay"
								className="form-control w-50 mb-3"
								id=""
								ref={register({ required: true })}
							/>
							{errors.birthDay && errors.birthDay.type === 'required' && (
								<span className="d-block text-danger">Required</span>
							)}
							<input type="submit" value="Save" className="btn btn-info" />
						</form>
					</div>
				) : (
					<>
						<p className="mt-2">{props.DOB}</p>
					</>
				)}
			</div>
		</React.Fragment>
	);
};

export default DOB;
