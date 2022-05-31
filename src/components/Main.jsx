import React from "react";
import Button from "react-bootstrap/Button";
import Girl from "./images/landing-page-girl.png";

const Main = () => {
  return (
    <div className="main">
        
      <img src={Girl} alt="Girl" />
      <h1>Feel The Music</h1>
      <p>Stream over 20 thousand song with one</p>
      <p>click</p>
      <Button a href="#Join">Join Now</Button>
    </div>
  );
};

export default Main;

// position fix
//
