import React from "react";
import Select from "@material-ui/core/Select";

function NumOfBedrooms({ register, counter }) {
  return (
    <>
      <Select
        native
        inputProps={{
          name: "numberOfRooms",
          ref: register({ required: true }),
          defaultValue: "Number Of Bedrooms",
        }}
        style={{ width: "100%", padding: "1rem" }}
      >
        <option disabled hidden>
          Number Of Bedrooms
        </option>
        <option aria-label="None" value="" />
        {counter.map((bedroom, i) => (
          <option key={i} value={`${bedroom}`}>{`${bedroom} bedroom`}</option>
        ))}
      </Select>
    </>
  );
}

export default NumOfBedrooms;
