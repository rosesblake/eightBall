import "./EightBall.css";
import React, { useState } from "react";

const EightBall = ({ answers }) => {
  const getRandom = () => Math.floor(Math.random() * answers.length);
  //default msg/color using state
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black",
  });
  // func to set a new answer on click
  const getAnswer = () => {
    setAnswer(answers[getRandom()]);
  };

  return (
    //assign new answer on div click
    <div
      className="EightBall"
      onClick={getAnswer}
      style={{ backgroundColor: answer.color }}
    >
      <div className="EightBall-answers">{<p>{answer.msg}</p>}</div>
    </div>
  );
};

export default EightBall;
