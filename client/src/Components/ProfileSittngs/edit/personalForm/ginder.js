import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Personal.css';

import { AuthContext } from '../../../../Context/AuthContext';
import ErrorModal from '../../../ErrorModal/ErrorModal';

let Gender = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	//name
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit_2 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/gender/${userId}`,
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
				props.setGender(res.data.gender);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
		ginderSet(!ginderEditState);
	};

	// const history = useHistory();

	const [ginderEditState, ginderSet] = useState(false);

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}

			<div className="Gender">
				<span className="font-weight-bold">Gender</span>
				<span
					role="button"
					className="float-right edit"
					onClick={e => {
						ginderSet(!ginderEditState);
					}}
				>
					{loading ? <Spinner animation="border" variant="primary" /> : 'Edit'}
				</span>
				{ginderEditState ? (
					<div className="Gender-edit">
						<form action="/#" method="post" onSubmit={handleSubmit(onSubmit_2)}>
							<select
								defaultValue={'DEFAULT'}
								className="form-control mb-3"
								name="gender"
								ref={register({ required: true })}
							>
								<option value="DEFAULT" disabled selected>
									Select
								</option>
								<option value="male">Male</option>
								<option value="female">female</option>
								<option value="other">other</option>
							</select>
							{errors.gender && errors.gender.type === 'required' && (
								<span className="d-block text-danger">Required</span>
							)}
							<input type="submit" value="Save" className="btn btn-info" />
						</form>
					</div>
				) : (
					<>
						<p className="text-muted mt-3">{props.gender}</p>
					</>
				)}
			</div>
		</React.Fragment>
	);
};

export default Gender;
