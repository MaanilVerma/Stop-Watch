import React from "react";

import styles from "./Laps.module.scss";

const Laps = ({ displayTime }) => {
  return (
    <>
      <li className={styles["list-item"]}>{displayTime}</li>
    </>
  );
};

export { Laps };
