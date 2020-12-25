import React,{useState} from "react";
import "./AccommodationHeader.css";
import homeImage from "../../../assets/home.jpg";
import HostHeader from "../../BecomHost/HostHeader/HostHeader"
function AccommodationHeader() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
     <HostHeader navbar={navbar} setNavbar={setNavbar}/>
    <div className="accHeader container mt-3">
      <h3>Place</h3>
      <a href="/" className="accHeader__location">
        Mansoura Qism 2, Dakahlia Governorate, Egypt
      </a>
      <img
        className="accHeader__image img-fluid .max-width: 100% rounded-lg"
        src={homeImage}
      />
    </div>
    </>
  );
}

export default AccommodationHeader;
