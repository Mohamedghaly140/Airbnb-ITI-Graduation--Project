import React,{useState} from "react";
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
