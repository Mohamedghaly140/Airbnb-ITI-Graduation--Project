import React from "react";
import Select from "@material-ui/core/Select";

function NumOfBed({ register, counter }) {
  return (
    <>
      <div>
        <Select
          native
          inputProps={{
            name: "numberOfbeds",
            ref: register({ required: true }),
            defaultValue: "Number Of Beds",
          }}
          style={{ width: "100%", padding: "1rem" }}
        >
          <option disabled hidden>
            Number Of Beds
          </option>
          <option aria-label="None" value="" />
          {counter.map((bed, i) => (
            <option key={i} value={`${bed}`}>{`${bed} bed`}</option>
          ))}
        </Select>
      </div>
    </>
  );
}

export default NumOfBed;
