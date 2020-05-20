import React from "react";
import "./index.css";

const ScoreBox = (props) => {
  return (
    <div className="scoreBox">
      <h3>Hit the Circle</h3>
      <p>Test your skill how many circles you can hit?</p>
      <div className="scoreContainer">
        <p>Score&nbsp;</p>
        <input className="score" readOnly value={props.totalScore} />
      </div>
    </div>
  );
};

export default ScoreBox;