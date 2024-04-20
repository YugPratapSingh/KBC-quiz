import React, { useEffect } from "react";
import { useRef } from "react";
import useSound from "use-sound";
import startsound from "../assets/startsound.mp3";
import kbclogo from "../assets/kbclogo.png";

export default function Start({ setUserName }) {
  const [startingsound] = useSound(startsound);
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };

  useEffect(() => {
    startingsound();
  }, [startingsound]);

  return (
    <div className="container d-flex min-vh-100 justify-content-center align-items-center">
      <form>
        <div className="mb-3">
          <h1>---------------Welcome---------------</h1>
          <hr />
          <br />
          <center>
          <img src={kbclogo} alt="no" />
          </center>
          <h2>
            <center>KBC Quiz Game</center>
          </h2>
          <label for="Setuser" className="form-label" placeholder="Hello">

            <br />
            <br /> Please Enter your name :
          </label>
          <input
            type="user"
            className="form-control"
            id="Setuser"
            ref={inputRef}
          />
        </div>
        <div className="d-grid col-3 mx-auto">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
