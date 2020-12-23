import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import AuthState from './Context/Auth/authState';

ReactDOM.render(
	<AuthState>
		<App />
	</AuthState>,
	document.getElementById('root')
);
