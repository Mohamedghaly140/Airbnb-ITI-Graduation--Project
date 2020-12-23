import React from "react";

function PasswordInput({ errors, register }) {
  return (
    <>
      <input
        type="password"
        name="password"
        id="pass"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && errors.password.type === "required" && (
        <p className="error">Please Enter Your Password</p>
      )}
    </>
  );
}

export default PasswordInput;
