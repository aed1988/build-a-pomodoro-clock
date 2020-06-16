import React, {useEffect, useState} from "react";
import ClockComponent from "./ClockComponent";

const ClockContainer = () => {
  const [time, setTime] = useState({work: 1500, rest: 300});
  const [isTimeCountingDown, setIsTimeCountingDown] = useState(false);
  const [lastUpdatedValue, setLastUpdatedValue] = useState("work");

  useEffect(() => {
    let countdownTimeId = null;

    if (!isTimeCountingDown && time.work !== 0) {
      clearInterval(countdownTimeId);
    } else if (time.work === 0) {
      setTimeout(() => {
        handleReset();
      }, 2000);
    } else {
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
    setIsTimeCountingDown((prevIsTimeCountingDown) => !prevIsTimeCountingDown);
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
    setTime({
      ...time,
      [name]: parseInt(value) - 60,
    });
    setLastUpdatedValue(name);
  };

  return (
    <>
      <ClockComponent
        timeToDisplay={time[lastUpdatedValue]}
        time={time}
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
