import React from "react";
import "./Ourteam.css";
import z_pic from "../../Assets/team/im11.jpg";
import a_pic from "../../Assets/team/im10.webp";
import t_pic from "../../Assets/team/im1.jpg";
import m_pic from "../../Assets/team/im16.jpg";
import s_pic from "../../Assets/team/im23.jpg";
function Team(props) {
  const ourTeam = [
    {
      name: "t Ibrahim",
      title: "Product Owner",
      image: t_pic,
      class: "leftC",
    },
    {
      name: "a Mohammad",
      title: "Web Developer",
      image: a_pic,
      class: "rightC",
    },
    {
      name: "m Suleiman",
      title: "Web Developer",
      image: m_pic,
      class: "leftC",
    },
    {
      name: "Abdelrahman s",
      title: "Web Developer",
      image: s_pic,
      class: "leftC",
    },
  ];

  return (
    <section class="client pt-3 pb-5">
      <div class="container">
        <div>
          <h2 className="home-heading">Our Team</h2>
          <div className="ourteam-container">
            <div className="memberContainer">
              <div class="row text-center">
                <div class="col-12 text-center">
                  {/* <h1 class="display-3 fw-bold text-black home-heading ">
                    Our Team
                  </h1> */}
                  <hr
                    class="bg-white mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: "100px", height: "3px" }}
                  />
                  {/* <p class="p-text text-white">What we offer</p> */}
                </div>
              </div>
              <div class="row align-items-md-center text-white text-center">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div
                    id="HotelouselExampleCaptions"
                    class="Hotelousel slide"
                    data-bs-ride="Hotelousel"
                  >
                    <div class="Hotelousel-inner">
                      <div class="Hotelousel-item active">
                        <div class="row p-4">
                          {/* <div class="t-Hoteld">
                            <img
                              src={z_pic}
                              alt="laptop hp"
                              style={{ width: "100%" }}
                            />
                          </div> */}

                          <div class="row">
                            <div class="col-sm-10 text-center ">
                              <div className={ourTeam[0].class}>
                                <img
                                  width="100%"
                                  src={z_pic}
                                  alt="Team Member"
                                  className="ourteam-img"
                                />
                                <div className="colNum2">
                                  <h4>z Samamah</h4>
                                  <p>Scrum Master</p>
                                  <a
                                    id="contactIcon"
                                    href="https://www.facebook.com/"
                                  >
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                  <a
                                    id="contactIcon"
                                    href="https://www.linkedin.com/"
                                  >
                                    <i className="fab fa-linkedin-in"></i>
                                  </a>
                                  <a
                                    id="contactIcon"
                                    href="https://www.twitter.com/"
                                  >
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {ourTeam.map((teamInfo, index) => {
                        return (
                          <div id={index} class="Hotelousel-item">
                            <div class="row p-4">
                              {/* <div class="t-Hoteld">
                                <img
                                  src={teamInfo.image}
                                  alt="laptop hp"
                                  style={{ width: "100%" }}
                                />
                              </div> */}

                              <div class="row">
                                <div class="col-sm-10 text-center ">
                                  <div className={teamInfo.class}>
                                    <img
                                      width="100%"
                                      src={teamInfo.image}
                                      alt="Team Member"
                                      className="ourteam-img"
                                    />
                                    <div className="colNum2">
                                      <h4>{teamInfo.name}</h4>
                                      <p>{teamInfo.title}</p>
                                      <a
                                        id="contactIcon"
                                        href="https://www.facebook.com/"
                                      >
                                        <i className="fab fa-facebook-f"></i>
                                      </a>
                                      <a
                                        id="contactIcon"
                                        href="https://www.linkedin.com/"
                                      >
                                        <i className="fab fa-linkedin-in"></i>
                                      </a>
                                      <a
                                        id="contactIcon"
                                        href="https://www.twitter.com/"
                                      >
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </div>
                                  </div>
                                  {/* </p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div class="controls push-right">
                    <a
                      class="left fa fa-chevron-left btn btn-outline-black ps-3 pe-3"
                      href="#HotelouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      {null}
                    </a>
                    <a
                      class="right fa fa-chevron-right btn btn-outline-black ps-3 pe-3"
                      href="#HotelouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      {null}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
