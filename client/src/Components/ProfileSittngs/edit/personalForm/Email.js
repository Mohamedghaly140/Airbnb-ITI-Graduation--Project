import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Personal.css";



let Email = (props) => {

  const { register, handleSubmit, watch, errors } = useForm(
{    defaultValues:{
        email:props.email
      }}
  );
  const onSubmit_4 = data => console.log(data);


  const history = useHistory();

  const [emailEditState, emailSet] = useState(false);




return(
    <div className="email">
                <span className="font-weight-bold">Email address</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    emailSet(!emailEditState);
                  }}
                >
                  Edit
                </span>
                {emailEditState ? (
                  <div className="email-edit">
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit_4)}>
                      <div className="col-md-12">
                        <p>Use an address you’ll always have access to.</p>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          ref={register({required: true,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                        />
                        {errors.email && errors.email.type==="required"&&<span className="d-block text-danger" >Required</span>}
                        {errors.email && errors.email.type==="pattern"&&<span className="d-block text-danger" >Invalid email</span>}
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="btn col-md-2 mt-4 btn-info"
                      />
                    </form>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">{props.email}</p>
                  </>
                )}
              </div>
)}

export default Email;