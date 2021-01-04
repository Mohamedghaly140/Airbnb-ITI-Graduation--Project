import React, { useState, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { FcOk, FcCancel } from 'react-icons/fc';

import { AuthContext } from '../../../../Context/AuthContext';

const CheckAvilability = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const { placeId, isBooked, setModalShow } = props;

	// console.log(isBooked);

	const [loading, setLoading] = useState(false);

	const bookHandler = () => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/places/booked/${placeId}`,
				{ booked: true, userId },
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				// console.log(res.data);
				setLoading(false);
				setModalShow(false);
				setBooking(!booking);
			})
			.catch(err => {
				// console.log(err);
				setLoading(false);
			});
	};

	const [booking, setBooking] = useState(isBooked);

	return (
		<Modal
			{...props}
			size="md"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<svg
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					aria-label="Airbnb"
					role="img"
					focusable="false"
					style={{
						height: '36px',
						width: '36px',
					}}
				>
					<path d="m16.5 1c2.008085 0 3.4632027.96283388 4.7513779 3.26849971l.5326477 1.02546647c1.9537557 3.83047524 6.1137915 12.53917462 7.0991575 14.83626342l.1462392.3528118c.666849 1.5911597.9089331 2.4721983.9588638 3.3963643l.0112155.4148361c.0004984.0616776.0004984.134022.0004984.2274973 0 4.0620396-2.8764539 6.4782609-6.3571429 6.4782609-2.2243943 0-4.5558538-1.2577296-6.7085498-3.3861099l-.2574471-.25956-.1718602-.1793301h-.011l-.1755759.1847983c-2.0445114 2.1008154-4.2677042 3.4208856-6.41432039 3.6152501l-.27953818.0189396-.26742267.006012c-3.48068898 0-6.35714286-2.4162213-6.35714286-6.4782609l.00454695-.468363c.0267153-.9288567.22966104-1.7682114.83130912-3.2441913l.21547951-.5238937c.96518694-2.298134 6.08242852-12.98926921 7.70666272-16.03396302 1.278799-2.2884942 2.7339167-3.25132808 4.7420017-3.25132808zm0 2c-1.2386682 0-2.0526703.53861541-2.9867173 2.20976115l-.5236826 1.00849692c-1.9253014 3.77609709-6.05944731 12.43033983-7.03072523 14.69152843l-.34466233.836533c-.42741793 1.0708881-.57302322 1.6541875-.60525859 2.2390305l-.00853405.3300843c-.0004199.0548485-.0004199.1205531-.0004199.2063048 0 2.8727431 1.91133076 4.4782609 4.35714286 4.4782609 1.77322614 0 3.86957714-1.2360441 5.83116174-3.3543075-2.2950884-2.9375996-3.8549713-6.449937-3.8549713-8.9088504 0-2.9133611 1.9323483-5.3862954 5.1774304-5.4209947 3.2235547.0346993 5.155903 2.5076336 5.155903 5.4209947 0 2.4547692-1.5546293 5.9594145-3.8549699 8.9062679 1.9648698 2.1227832 4.0593243 3.35689 5.8311603 3.35689 2.4458121 0 4.3571429-1.6055178 4.3571429-4.4782609l-.0037202-.4108638c-.0193133-.671496-.1709867-1.2953427-.7139685-2.6202181l-.2488229-.5997251c-1.064789-2.4778253-5.9928845-12.7679933-7.5373949-15.66399932-.9434232-1.68831737-1.7574253-2.22693278-2.9960935-2.22693278zm.0107637 10.3157316c-2.0107259.021644-3.1774304 1.514741-3.1774304 3.4211105 0 1.796356 1.1790231 4.5797683 2.9544726 7.0428415l.2101941.2873164.174104-.2339736c1.7298707-2.3850145 2.8981786-5.0656085 2.9888755-6.8746747l.0056872-.2215096c0-1.9063695-1.1667045-3.3994665-3.155903-3.4211105z"></path>
				</svg>
			</Modal.Header>
			<Modal.Body>
				<div className="container">
					{booking ? (
						<div className="row justify-content-center">
							<FcCancel
								className="col-12 mb-5"
								style={{ fontSize: '4.5rem' }}
							/>
							<h5>Sorry this place is not Avilable for booking</h5>
						</div>
					) : (
						<React.Fragment>
							<div className="row justify-content-center">
								{loading ? (
									<div className="d-flex justify-content-center align-items-center mb-5 col-12">
										<Spinner animation="border" variant="success" />
									</div>
								) : (
									<FcOk
										className="col-12 mb-5"
										style={{ fontSize: '4.5rem' }}
									/>
								)}
								<h5>Avilable for booking</h5>
							</div>
						</React.Fragment>
					)}
				</div>
			</Modal.Body>
			<Modal.Footer className="row justify-content-center">
				{!booking && (
					<button className="mainForm__button col-5" onClick={bookHandler}>
						Book Now
					</button>
				)}
				<Button className="col-5 p-2 btn btn-secondary" onClick={props.onHide}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CheckAvilability;
