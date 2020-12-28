import React, { useState, useCallback, lazy, Suspense, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import AfterSearch from "./Components/AfterSearch/AfterSearch";
import Accommodation from "./Components/AfterAccommodation/Accommodation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HostPage from "./Components/BecomHost/HostPage/HostPage";
import SignUp from "./Components/signup/SignUp";
import SignUpModale from "./Components/signup/SignUpModale";
import Accom_host from "./Components/accom_after_host/Accom_host";
import ListSpace from "./Components/accom_after_host/ListSpace";
import AddonOne from "./Components/addons/AddonOne";
import AddonTwo from "./Components/addons/AddonTwo";
import AddonThree from "./Components/addons/AddonThree";
import AddonFour from "./Components/addons/AddonFour";
import AddonFive from "./Components/addons/AddonFive";
import { AuthContext } from "./Context/AuthContext";
import NotFound from "./Components/NotFound/NotFound";
import { Spinner } from "react-bootstrap";
import UpdateProfile from "./Components/accom_after_host/UpdateProfile";
import NavbarDown from "./Components/Home/Navbar/NavbarDown";

const Sitings = lazy(() => import("./Components/ProfileSittngs/EditApp"));

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
      "userData",
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
    localStorage.removeItem("userData");
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
    const storedData = JSON.parse(localStorage.getItem("userData"));
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
          <Route
            component={() => <Home onSearch={onSearch} />}
            path="/"
            exact
          />
          <Route
            component={() => <AfterSearch search={search} />}
            path="/search_results"
          />
          <Route
            render={props => <Accommodation {...props} />}
            path={`/accommodation/:id`}
          />
          <Route component={HostPage} path="/become_host" />
          <Route component={SignUpModale} path="/signup" />
          <Route component={Accom_host} path="/collect_data" />
          <Route component={ListSpace} path="/host_form" />
          <Route path="/terms" component={AddonOne} />
          <Route path="/about" component={AddonTwo} />
          <Route path="/safty" component={AddonThree} />
          <Route path="/associates" component={AddonFour} />
          <Route path="/fighting_racism" component={AddonFive} />
          {token && (
            <Route
              render={() => (
                <Suspense
                  fallback={
                    <React.Fragment>
                      <div className="vh-100 d-flex justify-content-center align-items-center">
                        <div>
                          <Spinner animation="border" variant="primary" />
                        </div>
                      </div>
                    </React.Fragment>
                  }
                >
                  <Sitings />
                </Suspense>
              )}
              path="/edit_profile"
            />
          )}
          <Route path="/update/:id" component={UpdateProfile} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
