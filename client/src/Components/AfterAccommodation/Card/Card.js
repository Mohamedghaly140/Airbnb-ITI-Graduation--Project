import React, { useState } from 'react';
import './Card.css';
const Card = props => {
	const [showSearch, setShowSearch] = useState(false);
	const clickHandler = () => {};

	return (
		<div className=" mainHost__card " style={{ height: '23rem' }}>
			<div class="card mainHost__card__all" style={{ width: '23rem' }}>
				{!props.isBooked ? (
					<React.Fragment>
						<p
							className="text-center mb-0 font-weight-bold"
							style={{
								color: 'rgb(230, 30, 77)',
							}}
						>
							This place alraedy Booked
						</p>
					</React.Fragment>
				) : (
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

							<button
								type="submit"
								className="mainForm__button"
								onClick={clickHandler}
								disabled={props.isBooked}
							>
								<span className="availability__main"></span>
								<span className="availability__text">Book</span>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
