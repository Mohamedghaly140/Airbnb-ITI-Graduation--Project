import { useState, useCallback, lazy, Suspense, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import AfterSearch from './Components/AfterSearch/AfterSearch';
import Accommodation from './Components/AfterAccommodation/Accommodation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HostPage from './Components/BecomHost/HostPage/HostPage';
import SignUp from './Components/signup/SignUp';
import SignUpModale from './Components/signup/SignUpModale';
import Accom_host from './Components/accom_after_host/Accom_host';
import ListSpace from './Components/accom_after_host/ListSpace';
import SuspenseFallback from './Components/SuspenseFallback/SuspenseFallback';
import AddonOne from './Components/addons/AddonOne';
import AddonTwo from './Components/addons/AddonTwo';
import AddonThree from './Components/addons/AddonThree';
import AddonFour from './Components/addons/AddonFour';
import AddonFive from './Components/addons/AddonFive';
import { AuthContext } from './Context/AuthContext';
import NotFound from './Components/NotFound/NotFound';

const Sitings = lazy(() => import('./Components/ProfileSittngs/EditApp'));

let logoutTimer;

function App() {
	const [token, setToken] = useState(false);
	const [userId, setUserId] = useState(null);
	const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

	const login = useCallback((uid, token, expirationDate) => {
		setToken(token);
		setUserId(uid);
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(tokenExpirationDate);
		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId: uid,
				token: token,
				expiration: tokenExpirationDate.toISOString(),
			})
		);
	}, []);

	const logout = useCallback(() => {
		setToken(null);
		setUserId(null);
		setTokenExpirationDate(null);
		localStorage.removeItem('userData');
	}, []);

	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, tokenExpirationDate, logout]);

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem('userData'));
		if (
			storedData &&
			storedData.token &&
			new Date(storedData.expiration) > new Date()
		) {
			const { userId, token, expiration } = storedData;
			login(userId, token, new Date(expiration));
		}
	}, [login]);

	const [search, setSearch] = useState({});
	const onSearch = (location, guests, start, end) => {
		setSearch({
			location,
			guests,
			start,
			end,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: !!token,
				token: token,
				userId: userId,
				login: login,
				logout: logout,
			}}
		>
			<Router>
				<Switch>
					<Suspense fallback={<SuspenseFallback />}>
						<Route
							component={() => <Home onSearch={onSearch} />}
							path="/"
							exact
						/>
						<Route
							component={() => <AfterSearch search={search} />}
							path="/search_results"
							exact
						/>
						<Route
							render={props => <Accommodation {...props} />}
							path={`/accommodation/:id`}
							exact
						/>
						<Route component={() => <HostPage />} path="/become_host" exact />
						<Route component={() => <SignUpModale />} path="/signup" exact />
						<Route
							component={() => <Accom_host />}
							path="/collect_data"
							exact
						/>
						<Route component={() => <ListSpace />} path="/host_form" />
						<Route path="/AddonOne" component={AddonOne} />
						<Route path="/AddonTwo" component={AddonTwo} />
						<Route path="/AddonThree" component={AddonThree} />
						<Route path="/AddonFour" component={AddonFour} />
						<Route path="/AddonFive" component={AddonFive} />
						{token && <Route component={Sitings} path="/edit_profile" />}
						<Route component={NotFound} />
					</Suspense>
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
