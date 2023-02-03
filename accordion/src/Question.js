import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [isClicked, setIsClicked] = useState(false);

  const click = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div class="question-container">
      <h4 class="question-title">{title}</h4>
      <span class="plus" onClick={click}>
        {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </span>
      <p class="question-info">{isClicked ? info : null}</p>
    </div>
  );
};

export default Question;
