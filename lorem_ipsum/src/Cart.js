import React, { useState, useRef } from "react";
import classes from "./Cart.module.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
const Cart = ({ id, image, name, title, quote, position, index }) => {
  return (
    <article key={id} className={classes[position]}>
      <div className="content">
        <img src={image} alt="" />
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{quote}</p>
        <FaQuoteRight />
      </div>
    </article>
  );
};

export default Cart;
