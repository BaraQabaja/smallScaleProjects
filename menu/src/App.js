import React, { useState } from "react";
import Menu from "./components/Menu";

import items from "./components/data";
import classes from "./App.module.css";
import "./index.css";
function App() {


  return (
    
    <main className={classes.main}>
     
      <div className={classes["title-container"]}>
        <h1 className={classes.title}>Our Menu</h1>
        
      </div>
      <div className={classes.underline}></div>
      <Menu />
      
    </main>
  );
}

export default App;
