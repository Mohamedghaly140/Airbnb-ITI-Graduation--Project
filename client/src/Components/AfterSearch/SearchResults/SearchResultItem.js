import React from "react";
import { Link } from "react-router-dom";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import "./SearchResults.css";

const SearchResultItem = props => {
  const {
    id,
    title,
    price,
    placeType,
    imageUrl,
    numOfBeds,
    numOfGuests,
    numOfRooms,
    city,
  } = props;

  return (
    <Link
      to={`/accommodation/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="mCard row mb-3 mt-4 p-3 border-top border-bottom">
        <div className="mslider col-4 ml-1">
          <div
            id="carouselExampleControls"
            className="carousel slide m-auto"
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
                  className="d-block w-100 acco-img"
                  src={`${process.env.REACT_APP_BACKEND_URL}/${imageUrl}`}
                  alt={title}
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
              i9vc
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className=" col-xl-7  col-12">
          <div className="desc__header">
            <p>
              {placeType} in {city}
            </p>
            <h5>{title}</h5>
          </div>
          <div className="desc__info">
            <div className="row ml-1">
              <p>{numOfGuests} guests.</p>
              <p>{numOfRooms} bedroom.</p>
              <p>{numOfBeds} bed.</p>
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
              <p>{price} L.E / night</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultItem;
