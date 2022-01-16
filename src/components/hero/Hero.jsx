import React from "react";
import "./hero.css";
import heroimg from "../../images/hero.png";

const Hero = () => {
  return (
    <div className="hero padding-right">
      <div className="hero-img">
        <img src={heroimg} alt="hero img" />
      </div>

      <div className="hero-content">
        <h1 className="hero-h1">Online Experience</h1>
        <p className="hero-des">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
