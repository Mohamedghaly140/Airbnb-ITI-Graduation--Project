import React, { useState, useContext } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SignUpModale from '../../../Components/signup/SignUpModale';
import Login from '../../../Components/Login/Login';
// import { Dropdown } from "reactstrap";

import { AuthContext } from '../../../Context/AuthContext';

function HeaderRight() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [modalShow, setModalShow] = useState(false);
	const [modalShow_2, setModalShow_2] = useState(false);

	const authContext = useContext(AuthContext);
	const { logout } = authContext;

	//signup popup
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// model bootstrap

	const toggle = () => setDropdownOpen(prevState => !prevState);
	return (
		<>
			<div className="header2__right col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
				<Link to="/become_host">
					<p className="header_host_text">Become a Host</p>
				</Link>
				<div className="header2__right__currency">
					<LanguageIcon />
				</div>
				<div className="header2__right__icons">
					<div className="header2__right__profileIcons" onClick={toggle}>
						<DehazeIcon />
						<AccountCircleIcon />
					</div>
					{dropdownOpen && (
						<ul className="links">
							<a
								className="py-1"
								variant="primary"
								onClick={() => setModalShow_2(true)}
							>
								<li role="button">Login</li>
							</a>
							<Login show={modalShow_2} onHide={() => setModalShow_2(false)} />
							<a
								className="py-1"
								variant="primary"
								onClick={() => setModalShow(true)}
							>
								<li>Signup</li>
							</a>
							<SignUpModale
								role="button"
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
							<Link className="py-1" to="/edit_profile/edit">
								<li>Sitings</li>
							</Link>
							<a className="py-1" onClick={logout}>
								{' '}
								<li>Log out</li>
							</a>
						</ul>
					)}
				</div>
			</div>
		</>
	);
}

export default HeaderRight;
