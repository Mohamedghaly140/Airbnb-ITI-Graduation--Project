import React from "react";

function CityState({ register }) {
  return (
    <>
      <div className="address-input">
        <input
          type="text"
          name="city"
          placeholder="City"
          ref={register({ required: true })}
        />
      </div>
      <div className="address-input">
        <input
          type="text"
          name="State"
          placeholder="State"
          ref={register({ required: true })}
        />
      </div>
    </>
  );
}

export default CityState;
