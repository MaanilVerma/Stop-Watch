import React from "react";

import { Button } from "../Button";
import { Clock } from "../Clock";
import { Laps } from "../Laps";
import { PlayIcon } from "../../assets/PlayIcon";
import { PauseIcon } from "../../assets/PauseIcon";

import { useTimer } from "../../hooks/useTimer";
import { formatTime } from "../../utils/index";

import styles from "./StopWatch.module.scss";

const StopWatch = () => {
  const {
    timer,
    isPaused,
    handleStart,
    handlePause,
    handleReset,
    laps,
    handleLaps,
  } = useTimer(0);

  return (
    <>
      <Clock displayTime={formatTime(timer)} />
      <section className={styles["lap-container"]}>
        {laps.map((item, index) => (
          <Laps
            key={`${formatTime(item)}-${index}`}
            displayLapTime={formatTime(item)}
          />
        ))}
      </section>
      <div className={styles["button-wrapper"]}>
        <Button shape="rectangle" onClick={handleReset}>
          Reset
        </Button>
        <Button shape="circle" onClick={!isPaused ? handleStart : handlePause}>
          {!isPaused ? <PlayIcon /> : <PauseIcon />}
        </Button>
        <Button shape="rectangle" onClick={handleLaps}>
          Add Lap
        </Button>
      </div>
    </>
  );
};

export { StopWatch };
