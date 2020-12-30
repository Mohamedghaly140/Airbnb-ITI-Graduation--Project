import React from "react";
import "./Accommodation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccommodationHeader from "./AccommodationHeader/AccommodationHeader";
import AccommodationHost from "./AccommodationHost/AccommodationHost";
import Footer from "../../Pages/Footer/Footer";
import "../../Pages/Footer/Footer.css";
const Accommodation = props => {
  console.log("Accommodation", props);

  return (
    <div className="acc">
      <AccommodationHeader />
      <AccommodationHost id={props.match.params.id} />
      <Footer />
    </div>
  );
};

export default Accommodation;
