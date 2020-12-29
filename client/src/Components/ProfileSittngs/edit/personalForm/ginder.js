import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Personal.css";



let Gender = (props) => {
//name
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit_2 = data => console.log(data);


  const history = useHistory();

  const [ginderEditState, ginderSet] = useState(false);

return(
    <div className="Gender">
                <span className="font-weight-bold">Gender</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    ginderSet(!ginderEditState);
                  }}
                >
                  Edit
                </span>
                {ginderEditState ? (
                  <div className="Gender-edit">
                  <form action="/#" method="post" onSubmit={handleSubmit(onSubmit_2)}>
                    <select  defaultValue={'DEFAULT'} className="form-control mb-3" name="gender" ref={register({required: true})}>
                      <option  value="DEFAULT" disabled selected>
                        Select
                      </option>
                      <option value="1">Male</option>
                      <option value="2">female</option>
                      <option value="3">other</option>
                    </select>
                    {errors.gender && errors.gender.type==="required"&&<span className="d-block text-danger" >Required</span>}
                    <input
                        type="submit"
                        value="Save"
                        className="btn col-md-4 mt-4 btn-info"
                      />
                  </form>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">Not Selected</p>
                  </>
                )}
              </div>
)}

export default Gender;