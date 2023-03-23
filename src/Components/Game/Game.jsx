import React from "react";

export default function Game({ thumb, title, desc }) {
  return (
    <div className="col-md-6 col-lg-3 ">
      <div className="gameContent bg-secondary p-2 rounded">
        <img src={thumb} alt="test" className="w-100" />
        <h4 className="py-2">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}
