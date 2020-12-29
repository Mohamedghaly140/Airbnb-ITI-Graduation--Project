import React, { useState, useEffect } from "react";
import "../../Pages/Header/Header.css";
import HeaderCenter from "../../Pages/Header/Header-center/HeaderCenter";
import HeaderRight from "../../Pages/Header/Header-right/HeaderRight";
import DatePicker from "../../Pages/Header/Header-center/DatePicker";
import { Link } from "react-router-dom";

const Header = props => {
  const [showSearch, setShowSearch] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const top = window.scrollY < 100;

  //     if (top !== isTop) {
  //       setIsTop(top);
  //     }
  //   });
  // }, [isTop]);

  const showdate = search => {
    setShowSearch(search);
  };
  const startDate = start => {
    setStart(start);
  };
  const endDate = end => {
    setEnd(end);
  };
  const onSearch = (location, guests) => {
    props.onSearch(location, guests, start, end);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-between align-items-center">
        <Link to="/" className="col-2 d-none d-md-block">
          <div className="header2__icon">
            <img
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt="logo"
            />
          </div>
        </Link>
        <div className="col-12 col-md-3 ml-md-5 ml-0 text-center">
          <p>Places to stay</p>
          <hr style={{ margin: "0 auto", width: "80px" }} />
        </div>
        <HeaderRight className="col-4" />
        {showSearch && <DatePicker startDate={startDate} endDate={endDate} />}
      </div>
      <div className="row  justify-content-center align-items-center pt-2">
        <HeaderCenter
          show={showdate}
          startValue={start}
          endValue={end}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Header;
