import React,{useState} from "react";
import "./AccommodationHeader.css";
import HostHeader from "../../BecomHost/HostHeader/HostHeader"
function AccommodationHeader() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
     <HostHeader navbar={navbar} setNavbar={setNavbar}/>
    </>
  );
}

export default AccommodationHeader;
