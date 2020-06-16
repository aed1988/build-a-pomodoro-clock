import React from "react";
import PropTypes from "prop-types";

import SelectTimeButton from "./SelectTimeButton";

const ClockComponent = ({
  timeToDisplay,
  time: {work, rest},
  handlePlayPause,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  const timeDisplay = `${Math.floor(timeToDisplay / 60)}:${(
    timeToDisplay % 60
  ).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}`;

  return (
    <div>
      <SelectTimeButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        value={work}
      >
        Work
      </SelectTimeButton>
      <br />
      <SelectTimeButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        value={rest}
      >
        Rest
      </SelectTimeButton>
      <h1>{timeDisplay}</h1>
      <button onClick={handlePlayPause}>Start/Pause</button>
      <button onClick={handleReset}>Reset</button>
      <br />
    </div>
  );
};

ClockComponent.propTypes = {
  timeToDisplay: PropTypes.number.isRequired,
  time: PropTypes.object.isRequired,
  handlePlayPause: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ClockComponent;
