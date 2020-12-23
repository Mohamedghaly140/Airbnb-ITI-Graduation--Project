import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuth: true,
				loading: false,
				user: action.payload,
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuth: true,
				loading: false,
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: false,
				loading: false,
				user: null,
				error: action.error,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null,
			};
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: null,
				loading: false,
				user: null,
				error: null,
			};
		default:
			return state;
	}
};
