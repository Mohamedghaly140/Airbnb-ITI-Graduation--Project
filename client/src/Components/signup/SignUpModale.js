import React, { useState, useContext } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory, useRouteMatch } from 'react-router-dom';
import AgreeAndContinue from './AgreeAndContinue';
import EmailInput from './EmailInput';
import FirstName from './FirstName';
import LastName from './LastName';
import PasswordInput from './PasswordInput';
import './Signup.css';
import { Modal } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext';

function SignUpModale(props) {
	const authContext = useContext(AuthContext);
	const { login } = authContext;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();
	const route = useRouteMatch();

	const [validDate, setValidDate] = useState(false);

	if (validDate) {
		setTimeout(() => setValidDate(false), 3000);
	}

	const onSubmitHandler = dataForm => {
		let sendData;

		const pickedDate = new Date(dataForm.date).getFullYear();
		const validDate = new Date('2002-01-01').getFullYear();
		// console.log(pickedDate);
		// console.log(validDate);
		if (pickedDate > validDate) {
			return setValidDate(true);
		}

		if (route.path === '/become_host') {
			sendData = {
				...dataForm,
				isHost: true,
			};
		} else {
			sendData = dataForm;
		}

		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		setLoading(true);

		axios
			.post(
				`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`,
				sendData,
				config
			)
			.then(res => {
				// console.log(res);
				const user = res.data;
				const { token, userId, isHost } = user;

				if (route.path === '/become_host') {
					login(userId, token, isHost);
					history.push('/host_form');
				} else {
					login(userId, token, isHost);
				}

				setLoading(false);
				setError(null);

				return res;
			})
			.catch(err => {
				setLoading(false);
				setError(err.response.data.message);
				// console.log(err.response.data.message);
			});
	};

	return (
		<div id="signupmodel">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				style={{ borderRadius: '2rem' }}
			>
				{' '}
				<Modal.Body style={{ borderRadius: '2rem' }}>
					<div className="signup-container">
						<div className="finish-signup">
							<h5 className="text-center">Finish signing up</h5>
						</div>
						<form onSubmit={handleSubmit(onSubmitHandler)}>
							<div className="full-name">
								{/* FirstName */}
								<div className="name-input">
									<FirstName errors={errors} register={register} />
								</div>

								{/* LastName */}
								<div className="name-input last-name">
									<LastName errors={errors} register={register} />
								</div>
							</div>
							<span>Make sure it matches the name on your government ID.</span>
							<br />
							<div className="input-container">
								<input
									id="date"
									type="date"
									style={{ width: '100%' }}
									ref={register({ required: true })}
									name="date"
								/>
							</div>
							{errors.date && (
								<span className="error">Birthday is required</span>
							)}
							{validDate && (
								<span className="error">Age nust be Above 18 years</span>
							)}
							<span>
								To sign up, you need to be at least 18. Your birthday won’t be
								shared with other people who use Airbnb.
							</span>
							<br />

							{/* EmailInput */}
							<div className="input-container">
								<EmailInput errors={errors} register={register} />
							</div>
							<span>We'll email you trip confirmations and receipts.</span>
							{error && (
								<Alert
									variant="danger"
									onClose={() => setError(null)}
									dismissible
								>
									<Alert.Heading>{error}</Alert.Heading>
								</Alert>
							)}
							<br />
							{/* password */}
							<div className="input-container">
								<PasswordInput errors={errors} register={register} />
							</div>
							{loading ? (
								<React.Fragment>
									<div className="text-center py-2">
										<Spinner animation="border" variant="danger" />
									</div>
								</React.Fragment>
							) : (
								<AgreeAndContinue />
							)}
						</form>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default SignUpModale;
