import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import WifiOutlinedIcon from "@material-ui/icons/WifiOutlined";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import LanguageIcon from "@material-ui/icons/Language";
import { Link, withRouter } from "react-router-dom";
import "./AccommodationHost.css";
import DatePicker2 from "../DatePicker2/DatePicker2";
import GoogleMap2 from "../GoogleMap2/GoogleMap2";
import Card from "../Card/Card";
const AccommodationHost = ({id}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [acc , setacc] =useState({})
  const showdate = search => {
    setShowSearch(search);
  };
  const start_Date = startdate => {
    setStart(startdate);
  };
  const end_Date = enddate => {
    setEnd(enddate);
  };
  console.log(id)
  useEffect(() => {
    //pass the accomndation id to Api to  get the accomendation details
    
    //now we have props.id passed from searchresults page
    //we use get method and pass id as param

    //const data =result.data
    const data={}
    // assign the values 
    //depends on the data we get from the api we setacc to data
    setacc(data)
    // baind the values into the return() method
  }, []);

  return ( 
    //and here we use acc state 
    <>
    <div className="accHost container-fluid">
      <div className=" mainHost row">
        <div className="mainHost__AllDetails col-md-7 col-sm-12">
          <div className="row mainHost__Details1 offset-md-1">
            <div className="col-md-5  ">
              <h3>Casa hosted by Mahmoud</h3>
              <p>4 guests · 1 bed · 1 bath</p>
            </div>
            <div className="col-md-5 offset-md-2">
              <AccountCircleIcon />
            </div>
          </div>

          <hr className="hr1" />
          <div className="mainHost__Details2 col-md-11 offset-md-1 ">
            <h3>
              {" "}
              <HomeOutlinedIcon /> Entire home
            </h3>
            <p>You’ll have the casa particular (cuba) to yourself.</p>
            <h3>
              <NoteOutlinedIcon className="mr-1" />
              Cancellation policy
            </h3>
            <p>
              Add your trip dates to get the cancellation details for this stay.
            </p>
          </div>
          <hr className="hr1" />
          <div className="mainHost__Details3 col-md-11 offset-md-1">
            <p>Description</p>
            <a className="font-weight-bold" href="/">
              Contact host
            </a>
          </div>
          <hr className="hr1" />
          <div className="mainHost__Details4 col-md-11 offset-md-1">
            <h3>Ammenities</h3>
            <div className="ammenities">
              <div className="row">
                <p className="col-6">
                  <RestaurantOutlinedIcon className="mr-2" />
                  Kitchen
                </p>
                <p className="col-6">
                  <WifiOutlinedIcon className="mr-2" />
                  Wifi
                </p>
              </div>
              <div className="row">
                <p className="col-6">
                  <WbSunnyOutlinedIcon className="mr-2" />
                  Heating
                </p>
                <p className="col-6">Iron</p>
              </div>
              <div className="row">
                <p className="col-6">Washer</p>
                <p className="col-6 ">
                  <del>Carbon monoxide alarm</del>
                </p>
              </div>
              <button className="btn btn-light btn-amenities">
                Show all 6 amenities
              </button>
            </div>
          </div>
          {/* <hr className="hr1" /> */}
          {/* <div className="datePicker2 col-11 offset-1">
            <DatePicker2 datestart={start_Date} dateend={end_Date} />
          </div> */}
        </div>
        <Card show={showdate} startValue={start} endValue={end} />
        <div className="datePicker-card">
          {showSearch && (
            <DatePicker2 datestart={start_Date} dateend={end_Date} />
          )}
        </div>

        <hr className="hr-lg" />
      </div>
      <div className="reviews ml-5">
        <h3>
          <LanguageIcon className="mr-2" />
          No reviews (yet)
        </h3>
        <p>
          We’re here to help your trip go smoothly. Every reservation is covered
          by
          <a href="/">
            Airbnb’s
            <br /> Guest Refund Policy.
          </a>
        </p>
      </div>
      <hr className="hr-lg" />
      <div className="mt-3 ml-5">
        <h3>Location</h3>
        <p className="accHost__location">
          Mansoura Qimd 2, Dakahlia Governorate, Egypt
        </p>
      </div>

      <GoogleMap2 />
    </div>
    </>
  );
};

export default withRouter (AccommodationHost);
