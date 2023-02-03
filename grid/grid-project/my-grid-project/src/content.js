import React from "react";
import classes from "./content.module.css";
import Data from "./data";
import quote from "./assets/quote.svg";
const Content = () => {
  return (
    <section className={classes.content}>
      {Data.map((item) => {
        const { id, img, name, status, header, quote } = item;

        return (
          <div key={id} className={classes.item}>
            <div className={classes.cart_header}>
              
                <img src={img} alt={img} className={classes.myImg} />
              
              <div className={classes.cart_header_content}>
                <h1>
                  {name}
                 
                </h1>
                <p>{status}</p>
              </div>
            </div>
            <p className={classes.cart_body_header}>{header}</p>
            <p className={classes.cart_body_quote}>{quote}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Content;
