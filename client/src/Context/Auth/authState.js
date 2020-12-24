import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../Utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
} from '../types';

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		userId: localStorage.getItem('userId'),
		isAuth: null,
		isHost: false,
		loading: false,
		error: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Register User
	const signUp = async formData => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/api/users/signup',
				formData,
				config
			);

			console.log(res.data);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: REGISTER_FAIL,
				error: err.message,
			});
		}
	};

	// Login User
	const login = async formData => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				'http://localhost:5000/api/users/login',
				formData,
				config
			);

			console.log(res);

			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: LOGIN_FAIL,
				error: err.message,
			});
		}
	};

	// Logout
	const logout = () => dispatch({ type: LOGOUT });

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuth: state.isAuth,
				loading: state.loading,
				error: state.error,
				userId: state.userId,
				isHost: state.isHost,
				signUp,
				login,
				logout,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
