import React from "react";
import classes from "./List.module.css";

const List = ({ value }) => {
  return (
    <>
      {value.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article key={id} className={classes.article}>
            <img src={image} alt={name} className={classes.image}/>
            <div className={classes.info}>
              <h1>{name}</h1>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
