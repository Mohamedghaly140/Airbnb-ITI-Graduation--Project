import React from "react";
import "./Accommodation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccommodationHeader from "./AccommodationHeader/AccommodationHeader";
import AccommodationHost from "./AccommodationHost/AccommodationHost";
import Accomndation from "./Accomndation/Accomndation";
import Footer from "./CustomFooter/CustomFooter";
const Accommodation = (props) => {
  
  return (
    <div className="acc">
      <AccommodationHeader />
      <AccommodationHost id={props.match.params.id}/>
      <Accomndation />
      <Footer />
    </div>
  );
};

export default Accommodation;
