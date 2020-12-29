import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Personal.css";



let Name = (props) => {
//name
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues:{
      first : props.first,
      last :props.last,
    }
  });
  const onSubmit_1 = data => console.log(data);


  const history = useHistory();

  const [nameEditState, nameSet] = useState(false);

return(
    <div className="namee">
                <span className="font-weight-bold">Legal name</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    nameSet(!nameEditState);
                  }}
                >
                  Edit
                </span>
                {nameEditState ? (
                  <div className="name-edit">
                    <p>
                      This is the name on your travel document, which could be a
                      license or a passport.
                    </p>
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit_1)}>
                      <div className="col-md-5">
                        <label  className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="First"
                          // value={props.firstNameState}
                          name="first"
                          ref={register({required: true})}
                        />
                        {errors.first && errors.first.type==="required"&&<span className="d-block text-danger" >First Name Required</span>}
                        {errors.first && errors.first.type==="pattern"&&<span className="d-block text-danger" >Invalid name</span>}
                      </div>
                      <div className="col-md-5">
                        <label  className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          // value={props.lastNameState}
                          className="form-control"
                          id="Last"
                          name="last"
                          ref={register({required: true})}
                        />
                        {errors.last && errors.last.type==="required"&&<span className="d-block text-danger" >Last Name Required</span>}
                        {errors.last && errors.last.type==="pattern"&&<span className="d-block text-danger" >Invalid name</span>}
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="btn col-md-4 mt-4 btn-info"
                      />
                    </form>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">
                      {props.first} {props.last}
                    </p>
                  </>
                )}
              </div>
)}

export default Name;