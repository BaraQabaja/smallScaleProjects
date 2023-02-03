import React, { useState, useEffect } from "react";
import classes from "./Categore.module.css";
import { FcCurrencyExchange } from "react-icons/fc";
const Categore = ({
  id,
  title,
  category,
  price,
  img,
  desc,
  All,
  Bf,
  L,
  Sh,
  display,
}) => {
  console.log("display.Bf  " + display.Bf);
  let b = () => {
    console.log("All  " + All);

    // switch(category)
    // {
    //   case "breakfast":
    //     return(classes.disp)
    //     break;

    // }

    if (All) {
      return classes.disp;
    } else if (Bf && (id === 1 || id === 4 || id === 7)) {
      return classes.disp;
    } else if (Bf && (id !== 1 || id !== 4 || id !== 7)) {
      return classes.not_disp;
    } else if (L && (id === 2 || id === 5 || id === 8)) {
      return classes.disp;
    } else if (L && (id !== 2 || id !== 5 || id !== 8)) {
      return classes.not_disp;
    } else if (Sh && (id === 3 || id === 6 || id === 9)) {
      return classes.disp;
    } else if (Sh && (id !== 3 || id !== 6 || id !== 9)) {
      return classes.not_disp;
    }
  };

  console.log("All" + display.All);
  //  let a=   All
  //  ? classes.disp
  //  : Bf && (id == 1 || id == 4 || id == 7)
  //  ? classes.disp
  //  : classes.not_disp;

  return (
    <section className={`${classes.food_cart} ${b()}`}>
      <img alt="food_img" src={img} className={classes.img}></img>
      <div className={classes.content}>
        <div className={classes.title_container}>
          <h3>{title}</h3>
          <p>
            <FcCurrencyExchange className={classes.icon} />
            {price}
          </p>
        </div>
        <div className={classes.underline}></div>

        <p className={classes.desc}>{desc}</p>
      </div>
    </section>
  );
};

export default Categore;
