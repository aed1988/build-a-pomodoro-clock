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
  return (
    <div>
      <h1>{time}</h1>
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

ClockComponent.propTypes = {};

export default ClockComponent;
