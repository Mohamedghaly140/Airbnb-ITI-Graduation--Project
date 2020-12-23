import React from "react";

function EmailInput({ errors, register }) {
  return (
    <>
      <input
        name="email"
        id="email"
        placeholder="Email"
        style={{ borderColor: errors.email && "red" }}
        ref={register({
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />

      {/*Email Error Messages  */}
      {errors.email && errors.email.type === "required" && (
        <p className="error">Please Enter Your Email Adress</p>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <p className="error">Please Enter Invalied Email</p>
      )}
    </>
  );
}

export default EmailInput;
