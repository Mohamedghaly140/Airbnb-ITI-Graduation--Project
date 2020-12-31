import React, { useState } from 'react';
import './Card.css';
import CheckAvilability from './CardModal/CheckAvilability';
const Card = props => {
	const [showSearch, setShowSearch] = useState(false);
	//bootstrap modal
	const [modalShow, setModalShow] = React.useState(false);

	const clickHandler = () => {
		setShowSearch(!showSearch);
		props.show(!showSearch);
		console.log(props.show);
	};

	return (
		<div className=" mainHost__card " style={{ height: '23rem' }}>
			<div class="card mainHost__card__all" style={{ width: '23rem' }}>
				{/* <React.Fragment>
						<p
							className="text-center mb-0 font-weight-bold"
							style={{
								color: 'rgb(230, 30, 77)',
							}}
						>
							This place alraedy Booked
						</p>
					</React.Fragment> */}

				<div class="">
					<h5 class=" mainHost__card__title">
						<div className="mainHost__card__spans">
							<span className="price">{props.price} L.E</span> /
							<span className="night">night</span>
						</div>
					</h5>

					<div className="mainHost__card__mainForm">
						<div className="mainForm__check">
							<div className="mainForm__check__checkIn">
								<div className="check__checkIn__title">Check-In</div>
								<div className="check__checkIn_date" onClick={clickHandler}>
									{props.startValue}
								</div>
							</div>
							<div className="mainForm__check__checkOut">
								<div className="check__checkOut__title">Check-Out</div>
								<div className="check__checkOut_date" onClick={clickHandler}>
									{' '}
									{props.endValue}
								</div>
							</div>
						</div>
						<div className="mainForm__guestsMain">
							<label className="mainForm__guests">
								<div className="guests__title">Guests</div>
								<div className="guests__dataMain">
									<div className="guests__data">
										<input
											className="guests__guest"
											type="text"
											placeholder="1 guest"
										/>
									</div>
								</div>
							</label>
						</div>
					</div>
					<button
						type="submit"
						className="mainForm__button"
						variant="primary"
						onClick={() => setModalShow(true)}
					>
						<span className="availability__main"></span>
						<span className="availability__text">Check availability</span>
					</button>
					<CheckAvilability
						show={modalShow}
						onHide={() => setModalShow(false)}
						setModalShow={setModalShow}
						placeId={props.id}
						isBooked={props.isBooked}
					/>
				</div>
			</div>
		</div>
	);
};

export default Card;
