import React, {useEffect, useState} from "react";
import ClockComponent from "./ClockComponent";

const ClockContainer = () => {
  const [workTime, setWorkTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [time, setTime] = useState(3000);
  const [isTimeCountingDown, setIsTimeCountingDown] = useState(false);
  const [lastUpdatedValue, setLastUpdatedValue] = useState("");

  useEffect(() => {
    if (lastUpdatedValue === "Work") {
      setTime(workTime);
    } else if (lastUpdatedValue === "Break") {
      setTime(breakTime);
    }
  }, [lastUpdatedValue, breakTime, workTime]);

  useEffect(() => {
    let countdownTimeId = null;

    if (!isTimeCountingDown && time !== 0) {
      clearInterval(countdownTimeId);
    } else if (time === 0) {
      setTimeout(() => {
        handleReset();
      }, 2000);
    } else {
      countdownTimeId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownTimeId);
    };
  }, [time, isTimeCountingDown]);

  const handleReset = () => {
    setTime(3000);
    setIsTimeCountingDown(false);
  };

  const handlePlayPause = () => {
    setIsTimeCountingDown((prevIsTimeCountingDown) => !prevIsTimeCountingDown);
  };

  const handleIncrement = (event) => {
    const {value} = event.target;
    if (value === "Work") {
      setWorkTime((prevWorkTime) => prevWorkTime + 60);
    } else if (value === "Break") {
      setBreakTime((prevBreakTime) => prevBreakTime + 60);
    }
    setLastUpdatedValue(value);
  };

  const handleDecrement = (event) => {
    const {value} = event.target;
    if (value === "Work") {
      setWorkTime((prevWorkTime) => prevWorkTime - 60);
    } else if (value === "Break") {
      setBreakTime((prevBreakTime) => prevBreakTime - 60);
    }
    setLastUpdatedValue(value);
  };

  return (
    <>
      <ClockComponent
        time={time}
        workTime={workTime}
        breakTime={breakTime}
        handlePlayPause={handlePlayPause}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
      <br />
      {`Time: ${time}`}
    </>
  );
};

export default ClockContainer;
