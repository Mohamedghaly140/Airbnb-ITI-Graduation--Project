import React from "react";
import Select from "@material-ui/core/Select";

function ListCountries({ register }) {
  const country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
  ];
  return (
    <div className="pt-3">
      <h2>Where’s your place located?</h2>
      <span>
        Guests will only get your exact address once they’ve booked a
        reservation.
      </span>
      <br />
      <br />
      <h5>Country / Region</h5>
      <br />
      <Select
        native
        inputProps={{
          name: "country",
          ref: register({ required: true }),
        }}
        style={{ width: "100%", padding: "1rem" }}
      >
        <option aria-label="None" value="" />
        {country_list.map((country, i) => {
          return (
            <option key={i} value={country}>
              {country}
            </option>
          );
        })}
      </Select>
    </div>
  );
}

export default ListCountries;
