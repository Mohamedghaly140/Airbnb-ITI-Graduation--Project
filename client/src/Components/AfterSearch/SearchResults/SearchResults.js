import React, { useState, useEffect ,useCallback } from "react";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import { useHistory } from "react-router-dom";
import "../SearchResults/SearchResults.css";

const SearchResults = ({ SearchResultsList}) => {
 const history =useHistory()



  const openTheAccommodationDetails = () => {
    //mPassedId
    const id = "6" // it should be equal id passed 
  
    //pass the id to accomendation details screen befora navigate to it

    history.push(`/accommodation/${id}`);
  };

  return (
  //map on searchResultsList
  //we naly onClick beypass el id beta3 el acc
    <div className="col-lg-6 col-12" onClick={openTheAccommodationDetails}>
      <div className="container adv-search mt-5">
        <div>
          <p>300+ stayes</p>
          <h3>Stays in selected map area</h3>
        </div>
      </div>
      <div className="container adv-search__btns mt-4">
        <div className="row">
          <button className="rounded-pill">Cancellation flexibilty</button>
          <button className="rounded-pill">Type of place</button>
          <button className="rounded-pill">Price</button>
          <button className="rounded-pill">More filters</button>
        </div>
      </div>
      <hr />
      <div className="mCard row ">
        <div className="mslider col-4 ml-1 ">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active dot"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://a0.muscache.com/im/pictures/f14b83e5-1e45-40ce-abc4-60084836a060.jpg?im_w=960"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://a0.muscache.com/im/pictures/f14b83e5-1e45-40ce-abc4-60084836a060.jpg?im_w=960"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://a0.muscache.com/im/pictures/f14b83e5-1e45-40ce-abc4-60084836a060.jpg?im_w=960"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
i9vc              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="desc col-7">
          <div className="desc__header">
            <p>Entrie Apartment in Dahab</p>
            <h5>The Bass House</h5>
          </div>
          <hr style={{ width: "8%", marginLeft: 0 }} />
          <div className="desc__info">
            <div className="row ml-1">
              <p>4 guests.</p>
              <p>1 bedroom.</p>
              <p>1 bed.</p>
              <p>1 bath</p>
            </div>
            <div className="row ml-1 mt-0">
              <p>Wifi.</p>
              <p>Kitchen</p>
              <p>Air condetion</p>
            </div>
          </div>
          <div className="rate mt-4">
            <div className="row ml-1" style={{ float: "left" }}>
              <StarOutlinedIcon style={{ color: "red", marginTop: "0.3em" }} />
              <p>4.66</p>
            </div>
            <div className="row ml-1 " style={{ float: "right" }}>
              <AttachMoneyOutlinedIcon
                style={{ color: "black", marginTop: "0.3em" }}
              />
              <p>65 / night</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
     
    </div>
  );
};
export default SearchResults;
