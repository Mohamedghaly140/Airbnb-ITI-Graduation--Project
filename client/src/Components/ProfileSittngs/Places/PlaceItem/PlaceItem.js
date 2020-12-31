import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import "./PlaceItem.css";
import { Link } from "react-router-dom";

const PlaceItem = props => {
  const {
    id,
    title,
    description,
    price,
    placeType,
    imageUrl,
    numOfBeds,
    numOfGuests,
    numOfRooms,
    city,
    address,
    loading,
    onDeletePlace,
  } = props;

  return (
    <div className="container hostsCard shadow mb-3">
      <div className="row">
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
          <img
            className="img-fluid yourplace-img"
            src={`${process.env.REACT_APP_BACKEND_URL}/${imageUrl}`}
            alt={title}
          />
        </div>
        <div className=" col-md-7 col-12">
          <div className="desc__header">
            <p className="pt-2">{`${placeType} in ${city}`}</p>
            <h5>{title}</h5>
          </div>
          <hr style={{ width: "8%", marginLeft: 0 }} />
          <div className="desc__info">
            <div className="row ml-1">
              <p>{numOfGuests} guests.</p>
              <p>{numOfRooms} bedroom.</p>
              <p>{numOfBeds} bed.</p>
            </div>
            <div className="ml-1 mt-0">
              <div>Description: {description}</div>
              <p>address: {address}</p>
              <p className="text-muted">{price} EGP/day</p>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex align-items-center justify-content-end">
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <button
              className="btn btn-danger mr-2"
              onClick={() => onDeletePlace(id)}
            >
              Delete Place
            </button>
          )}
          {loading ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <Link to={`/update/${id}`} id={id} className="btn btn-primary ml-2">
              Update Place
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
