import React, { useState, useEffect } from "react";
import HostHeader from "../HostHeader/HostHeader";
import Footer from "../../../Pages/Footer/Footer";
import Castle from "../HostMainComponents/Castle";
import Explore from "../HostMainComponents/Explore";
import Host from "../HostMainComponents/Host";
import Host_help from "../host_help/Host_help";
import Safty from "../HostMainComponents/Safty";
import "./host.css";
import { withRouter } from "react-router-dom";

function HostPage() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <Host navbar={navbar} />
      <Explore />
      <Castle />
      <Safty />
      <Host_help />
      <Footer />
    </>
  );
}

export default HostPage;
