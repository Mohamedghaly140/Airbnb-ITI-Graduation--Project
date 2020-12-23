import React from "react";
import Select from "@material-ui/core/Select";

function ChooseProprity({ register }) {
  const options = [
    { value: "Appartment" },
    { value: "House" },
    { value: "Secondary unit" },
    { value: "Unique space" },
    { value: "Bed and breakfast" },
    { value: "Boutique hotel" },
  ];
  return (
    <>
      <span> Choose a property type</span>
      <Select
        native
        inputProps={{
          name: "place_type",
          ref: register({ required: true }),
        }}
        style={{ width: "100%", padding: "1rem" }}
      >
        <option aria-label="None" value="" />
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.value}
            </option>
          );
        })}
      </Select>
    </>
  );
}

export default ChooseProprity;
