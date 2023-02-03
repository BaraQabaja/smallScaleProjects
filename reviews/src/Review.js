import { useState, useRef } from "react";
import React from "react";
import data from "./data";
import { FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [value, setValue] = useState(0);
  const [newReview, setNewReview] = useState([]);
  const index = useRef(0);
  const right = ">";
  const left = "<";

  const { id, name, job, image, text } = data[value];

  const handleInc = () => {
    if (index.current === 3) index.current = 0;
    else index.current++;

    setValue(index.current);

    console.log("countRef ===> " + index.current);
  };

  const handleDec = () => {
    if (index.current === 0) index.current = 0;
    else index.current--;

    setValue(index.current);
    console.log("countRef ===> " + index.current);
  };

  return (
    <div class="cart">
      <div class="img_cont">
        <img src={image} alt="" class="cart-img"></img>
        <FaQuoteRight class="quote" />
      </div>
      <h5 class="name">{name}</h5>
      <h5 class="job">{job}</h5>
      <p class="text">{text}</p>
      <div>
        <button type="button" onClick={handleDec}>
          {left}
        </button>
        <button type="button" onClick={handleInc}>
          {right}
        </button>
      </div>
      <button type="button">Surpise Me</button>
    </div>
  );
};

export default Review;
