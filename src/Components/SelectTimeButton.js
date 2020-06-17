import React from "react";
import PropTypes from "prop-types";
import "./SelectTimeButton.modules.sass";

const SelectTimeButton = ({
  children,
  handleIncrement,
  handleDecrement,
  value,
  lastUpdatedValue,
}) => {
  const ref = React.useRef(value);
  const childrenToLowerCase = children.toLowerCase();

  return (
    <div className="container">
      <button
        id={`${children}-increment`}
        className="button button--increment"
        onClick={handleIncrement}
        value={value}
        name={childrenToLowerCase}
      >
        Increment
      </button>
      <button
        id={`${children}-decrement`}
        className="button button--decrement"
        onClick={handleDecrement}
        value={value}
        name={childrenToLowerCase}
      >
        Decrement
      </button>
      <p
        id={`${children}-length`}
        className={
          `button__text ` +
          (lastUpdatedValue === childrenToLowerCase ? "underlined" : undefined)
        }
      >
        {children}: {ref.current / 60}
      </p>
    </div>
  );
};

SelectTimeButton.propTypes = {
  children: PropTypes.string,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default SelectTimeButton;
