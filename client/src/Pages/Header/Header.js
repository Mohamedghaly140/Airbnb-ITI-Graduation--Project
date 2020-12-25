import React, { useState, useEffect } from "react";
import "../../Pages/Header/Header.css";
import HeaderCenter from "../../Pages/Header/Header-center/HeaderCenter";
import HeaderRight from "../../Pages/Header/Header-right/HeaderRight";
import DatePicker from "../../Pages/Header/Header-center/DatePicker";

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
      <div className="row">
        <div className="header2">
          <div className="header2__icon col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <img
              src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              alt=""
            />
          </div>
          <HeaderCenter
            show={showdate}
            startValue={start}
            endValue={end}
            onSearch={onSearch}
          />
          <HeaderRight className="col-3 mt-5" />
          {showSearch && <DatePicker startDate={startDate} endDate={endDate} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
