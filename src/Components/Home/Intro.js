import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="Home">
      <div className="overlay">
        <div className="main">
          <h1 className="intro-h">The Luxury Stay</h1>
          <p className="intro-p">
            Use <span className="intro-text">"abd99"</span> COUPON TO GET 10%
            OFF!
            <br />
            Reserve for Jan. 2022 through our websit and get our copoun.
          </p>
          <Link to="/shop">
            <button className="intro-button">View Gallery</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Intro;
