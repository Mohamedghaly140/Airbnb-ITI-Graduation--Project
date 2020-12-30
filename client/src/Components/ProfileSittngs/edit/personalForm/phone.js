
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