import React from "react";

import styles from "./Laps.module.scss";

const Laps = ({ displayLapTime }) => {
  const lapsEndRef = React.useRef(null);
  const scrollToBottom = () => {
    lapsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <>
      <li className={styles["list-item"]}>{displayLapTime}</li>
      <div ref={lapsEndRef} />
    </>
  );
};

export { Laps };
