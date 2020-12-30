import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../Personal.css';

<<<<<<< HEAD
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Personal.css";



let Phone = (props) => {
//name
  const { register, handleSubmit, watch, errors } = useForm(
{    defaultValues:{
    phone:props.phone
      }}
  );
  const onSubmit_4 = data => console.log(data);


  const history = useHistory();

  const [phoneEditState, phoneSet] = useState(false);



return(
    <div className="Phone number">
                <span className="font-weight-bold">Phone number</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    phoneSet(!phoneEditState);
                  }}
                >
                  Edit
                </span>
                {phoneEditState ? (
                  <div className="phone-edit">
                  <form action="" onSubmit={handleSubmit(onSubmit_4)}>
                    <input
                      type="text"
                      name="phone"
                      className="form-control w-50"
                      id=""
                      ref={register({required: true,pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                    })}
                    />
                    {errors.phone && errors.phone.type==="required"&&<span className="d-block text-danger" >Required</span>}
                    {errors.phone && errors.phone.type==="pattern"&&<span className="d-block text-danger" >Invalid phone number</span>}
                    <input type="submit" value="Save" className="btn btn-info" />
                  </form>
                  </div>
                ) : (
                  <>
                    <p>{props.phone}</p>
                  </>
                )}
              </div>

)}

export default Phone;
=======
import { AuthContext } from '../../../../Context/AuthContext';

let Phone = props => {
	const authContext = useContext(AuthContext);
	const { userId, token } = authContext;

	const [loading, setLoading] = useState(false);

	//name
	const { register, handleSubmit, watch, errors } = useForm({
		defaultValues: {
			phone: props.phone,
		},
	});

	const onSubmit_4 = data => {
		setLoading(true);
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/users/phone/${userId}`,
				data,
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then(res => {
				console.log(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
				setLoading(false);
			});
	};

	const history = useHistory();

	const [phoneEditState, phoneSet] = useState(false);

	return (
		<div className="Phone number">
			<span className="font-weight-bold">Phone number</span>
			<span
				role="button"
				className="float-right edit"
				onClick={e => {
					phoneSet(!phoneEditState);
				}}
			>
				Edit
			</span>
			{phoneEditState ? (
				<div className="phone-edit">
					<form action="" onSubmit={handleSubmit(onSubmit_4)}>
						<input
							type="text"
							name="phone"
							className="form-control w-50"
							id=""
							ref={register({
								required: true,
								pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
							})}
						/>
						{errors.phone && errors.phone.type === 'required' && (
							<span className="d-block text-danger">Required</span>
						)}
						{errors.phone && errors.phone.type === 'pattern' && (
							<span className="d-block text-danger">Invalid phone number</span>
						)}
						{loading ? (
							<Spinner animation="border" variant="primary" />
						) : (
							<input type="submit" value="Save" className="btn btn-info" />
						)}
					</form>
				</div>
			) : (
				<>
					<p>+20 {props.phone}</p>
				</>
			)}
		</div>
	);
};

export default Phone;
>>>>>>> 47bd04eedc0c7c30996d7aa7241f72442351fb04
