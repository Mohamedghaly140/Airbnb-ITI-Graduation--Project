import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Footer from "../../../Pages/Footer"

function HostForm() {
  const [state, setState] = useState({
    address: "",
    share_place: "",
    guests: "",
  });

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const submitFormHandler = () => {
    // console.log(state);
  };

  return (
    <section className="host-form-container ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-12 pt-5 pb-5 form-money">
            <span>See WHAT"S POSSIBLE</span>
            <br />
            <h1>Earn up to $200 a month hosting in Cairo</h1>
            <a href="#">How we estimate your earnings potentail</a>
          </div>
          <div className="col-md-5 offset-md-2 col-12 form-container">
            <h3>
              Tell us more about your place and we'll update your estimate
            </h3>
            <form className="earn-form">
              <div className="form-details">
                <div className="address-form-conatiner">
                  <TextField
                    id="outlined-basic"
                    name="address"
                    label="Address"
                    variant="outlined"
                    onChange={handleChange}
                    style={{ width: "100%", alignContent: "center" }}
                  />
                </div>
                <div className="place-form-container">
                  <Select
                    native
                    value={state.share_place}
                    onChange={handleChange}
                    inputProps={{
                      name: "share_place",
                      id: "Sharing",
                    }}
                    style={{ width: "100%", border: "2px solid lightgray" }}
                  >
                    <option value="Entire place">Entire place</option>
                    <option value="Privite room">Privite room</option>
                    <option value="Shared room">Shared room</option>
                  </Select>
                </div>
                <div className="guest-form-container">
                  <Select
                    native
                    value={state.guests}
                    onChange={handleChange}
                    inputProps={{
                      name: "guests",
                      id: "guest",
                    }}
                    style={{
                      width: "100%",
                      border: "2px solid lightgray",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <option value="1 guests">1 guests</option>
                    <option value="2 guests">2 guests</option>
                    <option value="3 guests">3 guests</option>
                    <option value="4 guests">4 guests</option>
                  </Select>
                </div>
              </div>
            </form>
            <div className="btn-form-container">
              <button
                className="form-btn"
                type="submit"
                onClick={submitFormHandler}
              >
                Start your listing
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default HostForm;
