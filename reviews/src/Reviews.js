import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Review from "./Review";
const Reviews = () => {



  return (
    <div class="content">
      <h1 class="title">Our Reviews</h1>

        <div>
      <Review/>
        </div>
     
    </div>
  );
};

export default Reviews;
