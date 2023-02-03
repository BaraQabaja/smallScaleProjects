import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import classes from "./App.module.css";
import Cart from "./Cart";

function App() {
  const [index, setIndex] = useState(0);
  const [persons, setPersons] = useState(data);

  useEffect(() => {
    console.log("useEffect one  ");
    const lastIndex = persons.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, persons]);
  console.log("useEffect " + index);
  useEffect(() => {
    console.log("useEffect two  " + index);
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div>
      <header className={classes.header}>
        <h1>Reviews</h1>
      </header>
      <section className={classes.section}>
        {persons.map((person, personIndex) => {
          const { id } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          } else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === persons.length - 1)
          ) {
            position = "lastSlide";
          }
          // console.log("position==>"+position+"   "+"index==>"+index)
          return (
            <Cart key={id} {...person} position={position} index={index}dfdfdsf />
          );
        })}
        <button
          className={classes.left_btn}
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft />
        </button>
        <button
          className={classes.right_btn}
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight />
        </button>
      </section>
    </div>
  );
}

export default App;
