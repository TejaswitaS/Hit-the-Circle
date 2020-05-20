import React from "react";
import "./index.css";

const Circle = (props) => {
  const { index, circleId, onClick } = props;
  return (
    <button
      className={`circle${index === circleId ? " active" : ""}`}
      onClick={onClick}
    ></button>
  );
};

export default Circle;
