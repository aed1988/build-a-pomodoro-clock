import React, {useEffect, useState} from "react";
import ClockComponent from "./ClockComponent";

const ClockContainer = () => {
  const [time, setTime] = useState({work: 1500, rest: 300});
  const [isTimeCountingDown, setIsTimeCountingDown] = useState(false);
  const [lastUpdatedValue, setLastUpdatedValue] = useState("work");

  useEffect(() => {
    let countdownTimeId = null;

    // Paused after being played
    if (!isTimeCountingDown && time[lastUpdatedValue] !== 0) {
      clearInterval(countdownTimeId);
    }

    // Time runs out
    else if (time[lastUpdatedValue] === 0) {
      setTimeout(alert("Time's up"), 1000);
      setIsTimeCountingDown(false);
      lastUpdatedValue === "work"
        ? setLastUpdatedValue("rest")
        : setLastUpdatedValue("work");
    }

    // Timer is played
    else {
      countdownTimeId = setInterval(() => {
        setTime((prevTime) => ({
          ...prevTime,
          [lastUpdatedValue]: prevTime[lastUpdatedValue] - 1,
        }));
      }, 1000);
    }

    return () => {
      clearInterval(countdownTimeId);
    };
  }, [time, isTimeCountingDown, lastUpdatedValue]);

  const handleReset = () => {
    setTime({work: 1500, rest: 300});
    setIsTimeCountingDown(false);
  };

  const handlePlayPause = () => {
    toggleIsCountingDown();
  };

  const handleIncrement = (event) => {
    const {name, value} = event.target;
    setTime({
      ...time,
      [name]: parseInt(value) + 60,
    });
    setLastUpdatedValue(name);
  };

  const handleDecrement = (event) => {
    const {name, value} = event.target;
    setLastUpdatedValue(name);
    if (time[lastUpdatedValue] < 60) return;
    if (time[lastUpdatedValue] > 60) {
      setTime({
        ...time,
        [name]: parseInt(value) - 60,
      });
    }
  };

  const toggleIsCountingDown = () =>
    setIsTimeCountingDown((prevIsTimeCountingDown) => !prevIsTimeCountingDown);

  return (
    <>
      <ClockComponent
        timeToDisplay={time[lastUpdatedValue]}
        time={time}
        handlePlayPause={handlePlayPause}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        lastUpdatedValue={lastUpdatedValue}
      />
    </>
  );
};

export default ClockContainer;
