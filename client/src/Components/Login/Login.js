import React, { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import '../Login/login.css';

import { AuthContext } from '../../Context/AuthContext';

const Login = props => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const authContext = useContext(AuthContext);
	const { login } = authContext;

	const [user, setUser] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const history = useHistory();

	const handleSubmit = () => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		setLoading(true);

		axios
			.post(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/login`,
				user,
				config
			)
			.then(res => {
				console.log(res);
				const user = res.data;
				const { token, userId, isHost, isAdmin } = user;

				login(userId, token);

				setLoading(false);
				history.push('/');
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setLoading(false);
			});
	};

	const onSubmitHandler = dataForm => {};

	return (
		<div className="Login-card ">
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				{' '}
				<Modal.Body className="text-center">
					<div className="header row">
						<i
							className="fas fa-times mt-2 mr-2 col-2"
							style={{ cursor: 'pointer' }}
						/>
						<span className="col-8"> log in</span>
					</div>
					<hr />
					<div className="region text-center">
						<div className="username-input">
							<input
								name="email"
								className="phoneNumber"
								placeholder="Email"
								type="email"
								onChange={handleChange}
							/>
						</div>
						<input
							name="password"
							className="phoneNumber"
							placeholder="Password"
							type="password"
							onChange={handleChange}
						/>
					</div>

					<p>
						We’ll call or text you to confirm your number. Standard message and
						data rates apply.
					</p>
					{loading ? (
						<React.Fragment>
							<div className="text-center py-2">
								<Spinner animation="border" variant="danger" />
							</div>
						</React.Fragment>
					) : (
						<React.Fragment>
							<input
								className="continue agree-btn continue-btn"
								type="submit"
								value="Continue"
								onClick={handleSubmit}
							/>
						</React.Fragment>
					)}
					<div>
						<div
							className="row"
							style={{ marginLeft: '20px', marginTop: '30px' }}
						>
							<div className="col-5" style={{ padding: 0 }}>
								<hr />
							</div>
							<div
								className="col-1"
								style={{ padding: 0, textAlign: 'center' }}
							>
								or
							</div>
							<div className="col-5" style={{ padding: 0 }}>
								<hr />
							</div>
						</div>
					</div>
					<div className="social-login">
						<button
							data-testid="social-auth-button-email"
							type="button"
							className="social-login__btn"
						>
							<div>
								<div className="row p-1">
									<i className="far fa-envelope fa-lg col-2 mt-1" />
									<div className="col-8">Continue with email</div>
								</div>
							</div>
						</button>
						<button
							data-testid="social-auth-button-email"
							type="button"
							className="social-login__btn"
						>
							<div>
								<div className="row p-1">
									<i
										className="fab fa-facebook fa-lg col-2 mt-1"
										style={{ color: '#3b5998' }}
									/>
									<div className="col-8">Continue with Facebook</div>
								</div>
							</div>
						</button>
						<button
							data-testid="social-auth-button-email"
							type="button"
							className="social-login__btn"
						>
							<div>
								<div className="row p-1">
									<i
										className="fab fa-google fa-lg  col-2 mt-1"
										style={{ color: '#DB4437' }}
									/>
									<div className="col-8">Continue with Google</div>
								</div>
							</div>
						</button>
						<button
							data-testid="social-auth-button-email"
							type="button"
							className="social-login__btn"
						>
							<div>
								<div className="row p-1">
									<i className="fab fa-apple fa-lg col-2 mt-1" />
									<div className="col-8">Continue with Apple</div>
								</div>
							</div>
						</button>
					</div>
					<div className="new-account">
						<div className="row">
							<p className="ml-3">Don't have an account</p>
							<a href="#" className="mt-2 ml-1">
								Sign up
							</a>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Login;
