import React from "react";

import styles from "./Clock.module.scss";

const Clock = ({ displayTime }) => {
  return (
    <section className={styles["clock-section"]}>
      <div className={styles.clock}>{displayTime}</div>
    </section>
  );
};

export { Clock };
