import React, { useState, useEffect, useCallback } from "react";
import { Spinner } from "react-bootstrap";
import "../SearchResults/SearchResults.css";

import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ searchResultsList }) => {
  console.log("Search reasult component", searchResultsList);

  return (
    //map on searchResultsList
    //we naly onClick beypass el id beta3 el acc
    <div className="col-md-6 col-12">
      <div className="container adv-search mt-5">
        <div>
          <h3>Stays in selected map area</h3>
        </div>
      </div>
      <div className="container adv-search__btns mt-4">
        <div className="row">
          <button className="rounded-pill  filters-btn">
            Cancellation flexibilty
          </button>
          <button className="rounded-pill filters-btn">Type of place</button>
          <button className="rounded-pill filters-btn">Price</button>
          <button className="rounded-pill filters-btn">More filters</button>
        </div>
      </div>
      <hr />
      {!searchResultsList ? (
        <React.Fragment>
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {searchResultsList.map(place => (
            <SearchResultItem
              key={place._id}
              id={place._id}
              title={place.title}
              description={place.description}
              price={place.price}
              placeType={place.placeType}
              imageUrl={place.image}
              numOfBeds={place.numberOfbeds}
              numOfGuests={place.numberOfGuests}
              numOfRooms={place.numberOfRooms}
              address={place.address}
              city={place.city}
            />
          ))}
        </React.Fragment>
      )}
      <hr />
    </div>
  );
};
export default SearchResults;
