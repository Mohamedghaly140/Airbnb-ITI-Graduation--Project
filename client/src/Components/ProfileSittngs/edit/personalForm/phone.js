import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Personal.css';
import { AuthContext } from '../../../../Context/AuthContext';
import ErrorModal from '../../../ErrorModal/ErrorModal';

let Phone = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			phone: props.phone,
		},
	});

	const onSubmit_4 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/phone/${userId}`,
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
				props.phoneSet(res.data.phone);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
		phoneSet(!phoneEditState);
	};

	const history = useHistory();

	const [phoneEditState, phoneSet] = useState(false);

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}

			<div className="Phone number">
				<span className="font-weight-bold">Phone number</span>
				<span
					role="button"
					className="float-right edit"
					onClick={e => {
						phoneSet(!phoneEditState);
					}}
				>
					{loading ? <Spinner animation="border" variant="primary" /> : 'Edit'}
				</span>
				{phoneEditState ? (
					<div className="phone-edit mt-2">
						<form action="" onSubmit={handleSubmit(onSubmit_4)}>
							<input
								type="text"
								name="phone"
								className="form-control w-50 mb-3"
								id=""
								ref={register({
									required: true,
									pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
								})}
							/>
							{errors.phone && errors.phone.type === 'required' && (
								<span className="d-block text-danger">Required</span>
							)}
							{errors.phone && errors.phone.type === 'pattern' && (
								<span className="d-block text-danger">
									Invalid phone number
								</span>
							)}
							<input type="submit" value="Save" className="btn btn-info" />
						</form>
					</div>
				) : (
					<>
						<p className="mt-1">+20 {props.phone}</p>
					</>
				)}
			</div>
		</React.Fragment>
	);
};

export default Phone;
