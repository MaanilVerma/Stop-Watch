import React from "react";

import { NavBar } from "./components/NavBar";
import { StopWatch } from "./components/StopWatch";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <StopWatch />
    </div>
  );
}

export default App;
