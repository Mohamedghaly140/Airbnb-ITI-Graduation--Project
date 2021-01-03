import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Personal.css';

import { AuthContext } from '../../../../Context/AuthContext';
import ErrorModal from '../../../ErrorModal/ErrorModal';

let Email = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			email: props.email,
		},
	});

	const onSubmit_4 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/email/${userId}`,
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
				props.setEmail(res.data.email);
				setLoading(false);
				setError(null);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
				setError(err.response.data.message);
			});
		emailSet(!emailEditState);
	};

	const history = useHistory();

	const [emailEditState, emailSet] = useState(false);

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					show={error && true}
					message={error}
					onHide={() => setError(null)}
				/>
			)}

			<div className="email">
				<span className="font-weight-bold">Email address</span>
				<span
					role="button"
					className="float-right edit"
					onClick={e => {
						emailSet(!emailEditState);
					}}
				>
					{loading ? <Spinner animation="border" variant="primary" /> : 'Edit'}
				</span>
				{emailEditState ? (
					<div className="email-edit">
						<form onSubmit={handleSubmit(onSubmit_4)}>
							<div className="edit-email">
								<p>Use an address you’ll always have access to.</p>
								<input
									type="email"
									className="form-control mb-3"
									id="email"
									name="email"
									ref={register({
										required: true,
										pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									})}
								/>
								{errors.email && errors.email.type === 'required' && (
									<span className="d-block text-danger">Required</span>
								)}
								{errors.email && errors.email.type === 'pattern' && (
									<span className="d-block text-danger">Invalid email</span>
								)}
							</div>
							<input type="submit" value="Save" className="btn btn-info" />
						</form>
					</div>
				) : (
					<>
						<p className="text-muted mt-3">{props.email}</p>
					</>
				)}
			</div>
		</React.Fragment>
	);
};

export default Email;
