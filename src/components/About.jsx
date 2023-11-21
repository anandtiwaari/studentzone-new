import React from "react";
import Mohit from "./Mohit.jpeg";
import Dhruvraj from "./Dhruvraj.jpeg";
import AnandTiwari from "./AnandTiwari.jpg";
export const About = (props) => {
  document.title = props.title;
  return (
    <div>
      <h1
        className="d-flex justify-content-center align-items-center"
        style={{
          color: props.color === "light" ? "black" : "white",
          // font-family: 'Bebas Neue', cursive;

          fontFamily: "'Roboto Mono', monospace",
        }}
      >
        About StudentZone
      </h1>

      <div
        className="ww"
        style={{ fontFamily: "'Roboto Mono', monospace", fontSize: "25px" }}
      >
        Team:
      </div>
      {/* pehla */}
      <div className="nayay d-flex justify-content-center flex-column align-items-center">
        <div
          class="card mb-3 shadow-lg bg-secondary text-light"
          style={{ width: "50%" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                src={Mohit}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div
                class="card-body"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                <h5 class="card-title">Mohit Varandani</h5>
                <p class="card-text">Web Developer</p>
                {/* <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* second hai */}
        <div
          class="card mb-3 shadow-lg bg-secondary text-light"
          style={{ width: "50%" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={Dhruvraj}
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div
                class="card-body"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                <h5 class="card-title">Dhruvraj Vyas</h5>
                <p class="card-text">Android Developer</p>
                {/* <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* teesraa */}
        <div
          class="card mb-3 shadow-lg bg-secondary text-light"
          style={{ width: "50%" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                src={AnandTiwari}
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div
                class="card-body"
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                <h5 class="card-title">Anand Tiwari</h5>
                <p class="card-text">Web Developer React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
