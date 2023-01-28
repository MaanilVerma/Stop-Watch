import React from "react";
import { ClockIcon } from "../../assets/ClockIcon";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <h1 className={styles["navbar-title"]}>Stopwatch</h1>
      <ClockIcon />
    </nav>
  );
};

export { NavBar };
