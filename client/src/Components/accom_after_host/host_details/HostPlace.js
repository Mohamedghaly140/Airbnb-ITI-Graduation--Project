import React from "react";
import Select from "@material-ui/core/Select";

function HostPlace({ register }) {
  return (
    <>
      <Select
        native
        inputProps={{
          name: "placeType",
          ref: register({ required: true }),
          defaultValue: "Place Type",
        }}
        style={{ width: "100%", padding: "1rem" }}
      >
        <option disabled hidden>
          Place Type
        </option>
        <option value="Entire place">Entire place</option>
        <option value="Privite room">Privite room</option>
        <option value="Shared room">Shared room</option>
      </Select>
    </>
  );
}

export default HostPlace;
