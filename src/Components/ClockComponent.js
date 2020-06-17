import React from "react";
import PropTypes from "prop-types";

import "./ClockComponent.modules.sass";

import SelectTimeButton from "./SelectTimeButton";

const ClockComponent = ({
  timeToDisplay,
  time: {work, rest},
  handlePlayPause,
  handleIncrement,
  handleDecrement,
  handleReset,
  lastUpdatedValue,
}) => {
  const timeDisplay = `${Math.floor(timeToDisplay / 60)}:${(
    timeToDisplay % 60
  ).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}`;

  return (
    <>
      <div className="section--buttons">
        <SelectTimeButton
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          value={work}
          lastUpdatedValue={lastUpdatedValue}
        >
          Work
        </SelectTimeButton>
        <SelectTimeButton
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          value={rest}
          lastUpdatedValue={lastUpdatedValue}
        >
          Rest
        </SelectTimeButton>
      </div>
      <div className="section--display">
        <p className=" section--display section--display__text">{timeDisplay}</p>
        <div className="section--display__buttons">
          <button className="section--display__button" onClick={handlePlayPause}>
            Start/Pause
          </button>
          <button className="section--display__button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </>
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
