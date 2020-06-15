import React from "react";
import PropTypes from "prop-types";

import SelectTimeButton from "./SelectTimeButton";

const ClockComponent = ({
  time,
  workTime,
  breakTime,
  handlePlayPause,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  const timeDisplay = `${Math.floor(time / 60)}:${(time % 60).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}`;

  return (
    <div>
      <h1>{timeDisplay}</h1>
      <button onClick={handlePlayPause}>Start/Pause</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <SelectTimeButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        value={workTime}
      >
        Work
      </SelectTimeButton>
      <br />
      <SelectTimeButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        value={breakTime}
      >
        Break
      </SelectTimeButton>
    </div>
  );
};

ClockComponent.propTypes = {
  time: PropTypes.number.isRequired,
  workTime: PropTypes.number.isRequired,
  breakTime: PropTypes.number.isRequired,
  handlePlayPause: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ClockComponent;
