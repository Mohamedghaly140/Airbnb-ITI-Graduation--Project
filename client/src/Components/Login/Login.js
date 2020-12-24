import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import '../Login/login.css';

import AuthContext from '../../Context/Auth/authContext';

const Login = props => {
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
		login(user);
		history.push('/');
		console.log(user);
	};

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
					<input
						className="continue agree-btn continue-btn"
						type="submit"
						value="Continue"
						onClick={handleSubmit}
					/>

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
