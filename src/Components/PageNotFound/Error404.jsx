import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="d-flex justify-content-center align-items-center p-5 flex-column">
      <h1 className="fa-3x">PAGE NOT FOUND !</h1>
      <p className="fa-2x">
        looks like the page you are trying to reach does no longer exist
      </p>
      <Link className="btn btn-primary" to={"/home"}>
        back to home page
      </Link>
    </div>
  );
}
