import React from "react";

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = React.useState(initialState);
  const [isPaused, setIsPaused] = React.useState(false);
  const [laps, setLaps] = React.useState([]);
  const countRef = React.useRef(null);

  const handleStart = () => {
    setIsPaused(!isPaused);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
    setTimer(0);
    setLaps([]);
    localStorage.removeItem("lapTimes");
  };

  const handleLaps = () => {
    setLaps([...laps, timer]);
    localStorage.setItem("lapTimes", JSON.stringify([...laps, timer]));
  };

  React.useEffect(() => {
    const lapTImesFromStorage = localStorage.getItem("lapTimes");
    if (lapTImesFromStorage) {
      setLaps(JSON.parse(lapTImesFromStorage));
    }
  }, []);

  return {
    timer,
    laps,
    isPaused,
    handleLaps,
    handleStart,
    handlePause,
    handleReset,
  };
};

export { useTimer };
