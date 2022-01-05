import React, { useState } from "react";
import "./Testimonials.css";
import Abdalrahman_Pic from "../../Assets/testimonials/im23.jpg";
import Mohammad_Pic from "../../Assets/testimonials/im21.jpg";
import Osaid_Pic from "../../Assets/testimonials/im20.jpg";

function Testimonial() {
  const [state, setState] = useState([
    {
      name: "Abdalrahman",
      text: "‟I am very happy with my first experience with Exotic. Thay have an amazing Hotels. „",
      image: Abdalrahman_Pic,
    },
    {
      name: "Mohammad",
      text: "‟This is my third time of using Exotic Hotels. Always on time. The Hotel as seen and expected order. „",
      image: Mohammad_Pic,
    },
    {
      name: "Osaid",
      text: "‟Rented several times and always satisfied. Variety of collections with reasonable prices„",
      image: Osaid_Pic,
    },
  ]);

  return (
    <div className="testimonials-container">
      <h2 className="home-heading">Testimonials</h2>
      <br /> <pre></pre> <pre></pre>
      <div className="testimonials">
        {state.map((teamInfo, index) => {
          return (
            <div className="people" key={index}>
              <img className="img" alt="Review" src={teamInfo.image} />
              <h4>{teamInfo.name}</h4>
              <p className="testimonials-p">{teamInfo.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
