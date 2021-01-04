import React ,{useState}from "react";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ShareRoom() {
  const [checked , setChecked] = useState("Create a new listing")

  const handleChange =(e)=>{
    setChecked(e.target.value)
  }
  const Card = () => {
    return (
      <>
        <div
          className="_6ikqekk"
          style={{
            height: "64px",
            width: "96px",
            backgroundImage:
              "url(https://a0.muscache.com/pictures/acbbe4a6-18b3-4c73-a7f6-891dbdb4d97b.jpg)",
            backgroundSize: "cover",
          }}
        ></div>
      </>
    );
  };
  return (
    <section className="p-3">
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
  
        }}
        onChange={handleChange}
       
      >
        <h1>How would you like to start?</h1>
        <div className="share-room">
          <Card />
          <FormControlLabel
            style={{ margin: "0" }}
            value="Create a new listing"
            control={<Radio color="primary" checked={checked==="Create a new listing"}/>}
            label="Create a new listing"
          />
        </div>
       
      </RadioGroup>
      <div className="text-center">
        <Link to="/host_form" >
         <p className="btn btn-primary btn-lg ">Next</p>
        </Link>
      </div>
    </section>
  );
}

export default ShareRoom;
