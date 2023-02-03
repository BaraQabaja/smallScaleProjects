import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const list = data.map((da) => {
    return <SingleQuestion key={da.id} {...da} />;
  });

  return (
    <main class="main">
      <div class="cart">
        <h1 class="header">Questions And Answers About Login</h1>
        <div class="questions-container">{list}</div>
      </div>
    </main>
  );
}

export default App;
