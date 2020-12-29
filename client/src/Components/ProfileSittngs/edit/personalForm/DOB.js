import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Personal.css";



let DOB = (props) => {
//name
  const { register, handleSubmit, watch, errors } = useForm(
{    defaultValues:{
        DOB:props.DOB
      }}
  );
  const onSubmit_3 = data => console.log(data);


  const history = useHistory();

  const [DOBEditState, DOBSet] = useState(false);



    return(
        <div className="DOB">

<span className="font-weight-bold">Date of birth</span>
<span
  role="button"
  className="float-right edit"
  onClick={(e) => {
    DOBSet(!DOBEditState);
  }}
>
  Edit
</span>
{DOBEditState ? (
  <div className="DOB-edit">
  <form action="/#" onSubmit={handleSubmit(onSubmit_3)}>
    <input
      type="date"
      name="BOD"
      className="form-control w-50"
      id=""
      ref={register({required: true})}
    />
    {errors.DOB && errors.DOB.type==="required"&&<span className="d-block text-danger" >Required</span>}
    <input type="submit" value="Save" className="btn btn-info" />
  </form>
  </div>
) : (
  <>
    <p>{props.DOB}</p>
  </>
)}
</div>)}

export default DOB;