import React from "react";
// import { useForm } from "react-hook-form";

function FirstName({ errors, register }) {
  return (
    <>
      <input
        type="text"
        name="firstName"
        id="fName"
        placeholder="First name"
        ref={register({
          required: true,
          minLength: 4,
          maxLength: 8,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      {/* firstName Error messages  */}
      {errors.firstName && errors.firstName.type === "required" && (
        <p className="error">Please Enter Your First Name</p>
      )}
      {errors.firstName && errors.firstName.type === "minLength" && (
        <p className="error">First Name must be 4-8 characters long</p>
      )}
      {errors.firstName && errors.firstName.type === "maxLength" && (
        <p className="error">First Name must be 4-8 characters long</p>
      )}
      {errors.firstName && errors.firstName.type === "pattern" && (
        <p className="error">Please Enter Invalied Name</p>
      )}
    </>
  );
}

export default FirstName;
