import React, { useState } from "react";
import classes from "./Menu.module.css";
import data from "./data";
import Categore from "./Categore";
const Menu = () => {
  const [displayAll, setDisplayAll] = useState(true);
  const [displayBf, setDisplayBf] = useState(false);
  const [displayL, setDisplayL] = useState(false);
  const [displaySh, setDisplaySh] = useState(false);

  const obj = {
    All: displayAll,
    Bf: displayBf,
    L: displayL,
    Sh: displaySh,
  };

  const Breakfast = () => {
    setDisplayAll(false);
    setDisplayBf(true);
  };

  const Lunch = () => {
    setDisplayAll(false);
    setDisplayBf(false);
    setDisplayL(true);
  };

  const Shakes = () => {
    setDisplayAll(false);
    setDisplayBf(false);
    setDisplayL(false);
    setDisplaySh(true);
  };

  // console.log("displayBf   "+displayBf)
  const info = data;

  const all = info.map((pice) => {
    return (
      <Categore
        key={pice.id}
        {...pice}
        display={({ Bf: displayBf }, { All: displayAll })}
        {...obj}
        className={classes.disp}
      />
    );
  });
  return (
    <>
      <nav className={classes.menu}>
        <span onClick={() => setDisplayAll(true)}>All</span>
        <span onClick={Breakfast}>Breakfast</span>
        <span onClick={Lunch}>Lunch</span>
        <span onClick={Shakes}>Shakes</span>
      </nav>
      <section className={classes.categories_container}>{all}</section>
    </>
  );
};

export default Menu;
