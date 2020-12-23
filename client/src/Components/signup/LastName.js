import React from "react";

function LastName({ errors, register }) {
  return (
    <>
      <input
        type="text"
        name="lastName"
        id="lName"
        placeholder="Last name"
        ref={register({
          required: true,
          minLength: 4,
          maxLength: 8,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      {/* Error messages  */}
      {errors.lastName && errors.lastName.type === "required" && (
        <p className="error">Please Enter Your Last Name</p>
      )}
      {errors.lastName && errors.lastName.type === "minLength" && (
        <p className="error">Last Name must be 4-8 characters long</p>
      )}
      {errors.lastName && errors.lastName.type === "maxLength" && (
        <p className="error">Last Name must be 4-8 characters long</p>
      )}
      {errors.lastName && errors.lastName.type === "pattern" && (
        <p className="error">Please Enter Invalied Name</p>
      )}
    </>
  );
}

export default LastName;
