import React from "react";
import Button from "./Button";


const SmallBox = () => {
  return (
    <div className="container center">
      <div className="box small-box">
        <h2>Ready To Build Your Community?</h2>
        {/* <button class="btn btn-primary btn-big">Get Started For Free</button> */}
        <Button title="Sign Up" />
      </div>
    </div>
  );
};

export default SmallBox;
