import React, {useEffect, useState} from "react";
import ClockComponent from "./ClockComponent";

const ClockContainer = () => {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [time, setTime] = useState(60);
  const [isTimeCountingDown, setIsTimeCountingDown] = useState(false);
  const [lastUpdatedValue, setLastUpdatedValue] = useState("");

  useEffect(() => {
    let countdownTimeId = null;

    if (isTimeCountingDown) {
      countdownTimeId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isTimeCountingDown && time !== 0) {
      clearInterval(countdownTimeId);
    }

    return () => {
      clearInterval(countdownTimeId);
    };
  }, [time, isTimeCountingDown]);

  const handleReset = () => {
    setTime(60);
    setIsTimeCountingDown(false);
  };

  const handlePlayPause = () => {
    setIsTimeCountingDown((prevIsTimeCountingDown) => !prevIsTimeCountingDown);
  };

  const handleIncrement = (event) => {
    const {value} = event.target;
    if (value === "Work") {
      setWorkTime((prevWorkTime) => prevWorkTime + 1);
    } else if (value === "Break") {
      setBreakTime((prevBreakTime) => prevBreakTime + 1);
    }
    setLastUpdatedValue(value);
  };

  const handleDecrement = (event) => {
    const {value} = event.target;
    if (value === "Work") {
      setWorkTime((prevWorkTime) => prevWorkTime - 1);
    } else if (value === "Break") {
      setBreakTime((prevBreakTime) => prevBreakTime - 1);
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
      {isTimeCountingDown ? <p>'Count down'</p> : <p>'nope'</p>}
      <br />
      {`Time: ${time}`}
    </>
  );
};

export default ClockContainer;
