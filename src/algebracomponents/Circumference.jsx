import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
export const Circumference = (props) => {
  document.title = props.title;
  const history = useHistory();
  const [frstvar, setfrstvar] = useState("");
  const [answer, setanswer] = useState("");

  const handlechange = (e) => {
    setfrstvar(e.target.value);
  };
  const handlewholesqr = () => {
    if (frstvar) {
      // let frstsquare = Math.pow(frstvar, 2);
      // let scndsquare = Math.pow(scndvar, 2);
      setanswer(Math.round(2 * frstvar * 3.14) + "  ");
    } else {
      toast.error("Input field cant be empty");
    }

    if (frstvar.length < 0) {
      toast.warning("Enter something");
      // return false;
    } else if (!/^\S{3,}$/.test(frstvar)) {
      // toast.warning("only number are allowed");
      // return false;
    } else if (!/^[a-zA-Z]+$/.test(frstvar)) {
      // toast.warning("only numbers are allowed");
    } else if (!/^(?:(\w)(?!\1\1))+$/.test(frstvar)) {
      toast.warning("only numbers are allowed");
    } else {
      setanswer(Math.round(2 * frstvar * 3.14) + "  ");
    }
    // setanswer(Math.ro  und(2 * frstvar * 3.14) + "  ");
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <>
        <div
          className="card text-center container my-2 bg-dark"
          style={{ width: "18rem", color: "white" }}
        >
          <h2>Circumference of Circle</h2>
          <form className="container text-center">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter Value of Radius
              </label>
              <input
                placeholder="enter the values of a "
                onChange={handlechange}
                value={frstvar}
                type="number"
                onClick={() => {
                  // setpehla(0);
                  setanswer("");
                }}
                required
                class="form-control text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button
              type="button"
              class="btn btn-primary text-center my-2"
              onClick={handlewholesqr}
              disabled={!frstvar.length > 0}
            >
              Calculate
            </button>
          </form>

          {answer.length > 0 && (
            <button className="btn btn-success my-2">{answer}</button>
          )}
          <button
            className="btn btn-danger text-center"
            onClick={() => {
              history.goBack();
            }}
          >
            Back
          </button>
        </div>
      </>
      <iframe
        style={{ borderRadius: "25px" }}
        webkitallowfullscreen
        mozallowfullscreen
        allowFullScreen
        className="embed-responsive-item"
        width="300"
        height="300"
        src="https://www.youtube.com/embed/riNAA-jx0u8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};
