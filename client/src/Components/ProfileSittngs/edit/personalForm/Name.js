import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Personal.css';

import { AuthContext } from '../../../../Context/AuthContext';

let Name = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);

	//name
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			firstName: props.first,
			lastName: props.last,
		},
	});

	const onSubmit_1 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/name/${userId}`,
				data,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				console.log(res.data);
				props.setFirst(res.data.userName.firstName)
				props.setLast(res.data.userName.lastName)
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
			nameSet(!nameEditState)
	};

	const history = useHistory();

	const [nameEditState, nameSet] = useState(false);

	return (
		<div className="namee">
			<span className="font-weight-bold">Legal name</span>
			<span
				role="button"
				className="float-right edit"
				onClick={e => {
					nameSet(!nameEditState);
				}}
			>
				Edit
			</span>
			{nameEditState ? (
				<div className="name-edit">
					<p>
						This is the name on your travel document, which could be a license
						or a passport.
					</p>
					<form onSubmit={handleSubmit(onSubmit_1)}>
						<div className="row mb-3">
							<div className="col-md-6">
								<label className="form-label">First name</label>
								<input
									type="text"
									className="form-control"
									id="First"
									// value={props.firstNameState}
									name="firstName"
									ref={register({ required: true })}
								/>
								{errors.first && errors.first.type === 'required' && (
									<span className="d-block text-danger">First Name Required</span>
								)}
								{errors.first && errors.first.type === 'pattern' && (
									<span className="d-block text-danger">Invalid name</span>
								)}
							</div>
							<div className="col-md-6">
								<label className="form-label">Last name</label>
								<input
									type="text"
									// value={props.lastNameState}
									className="form-control"
									id="Last"
									name="lastName"
									ref={register({ required: true })}
								/>
								{errors.last && errors.last.type === 'required' && (
									<span className="d-block text-danger">Last Name Required</span>
								)}
								{errors.last && errors.last.type === 'pattern' && (
									<span className="d-block text-danger">Invalid name</span>
								)}
							</div>
						</div>
						{loading ? (
							<Spinner animation="border" variant="primary" />
						) : (
							<input type="submit" value="Save" className="btn btn-info" />
						)}
					</form>
				</div>
			) : (
				<>
					<p className="text-muted mt-3">
						{props.first} {props.last}
					</p>
				</>
			)}
		</div>
	);
};

export default Name;
