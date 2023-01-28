import React from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

const Button = ({ children, shape, onClick }) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles["rectangular-button"]]: shape === "rectangle",
        [styles["circular-button"]]: shape === "circle",
      })}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
