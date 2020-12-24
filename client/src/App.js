import { useState, useContext, lazy, Suspense } from 'react';
import './App.css';
import Home from './Pages/Home';
import AfterSearch from './Components/AfterSearch/AfterSearch';
import Accommodation from './Components/AfterAccommodation/Accommodation';
import {
	BrowserRouter as Router,
	Route,
	Link,
	useParams,
} from 'react-router-dom';
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
import AuthContext from './Context/Auth/authContext';

import setAuthToken from './Utils/setAuthToken';
import PrivateRoute from './Components/Routing/PrivateRoute';
const Sitings = lazy(() => import('./Components/ProfileSittngs/EditApp'));

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	const authContext = useContext(AuthContext);
	const { isAuth } = authContext;

	const [search, setSearch] = useState({});
	const onSearch = (location, guests, start, end) => {
		setSearch({
			location,
			guests,
			start,
			end,
		});
	};
	// let { id } = useParams();

	return (
		<div>
			<Router>
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
					{isAuth ? (
						<Route
							render={props => <Accommodation {...props} />}
							path={`/accommodation/:id`}
							exact
						/>
					) : (
						<div>please sign up</div>
					)}
					<Route component={() => <HostPage />} path="/become_host" exact />
					<Route component={() => <SignUpModale />} path="/signup" exact />
					<Route component={() => <Accom_host />} path="/collect_data" exact />
					<Route component={() => <ListSpace />} path="/host_form" />
					<Route path="/AddonOne" component={AddonOne} />
					<Route path="/AddonTwo" component={AddonTwo} />
					<Route path="/AddonThree" component={AddonThree} />
					<Route path="/AddonFour" component={AddonFour} />
					<Route path="/AddonFive" component={AddonFive} />
					{isAuth && (
						<Route component={() => <Sitings />} path="/edit_profile" />
					)}
				</Suspense>
			</Router>
		</div>
	);
}

export default App;
