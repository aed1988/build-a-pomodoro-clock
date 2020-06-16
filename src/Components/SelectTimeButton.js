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
  const childrenToLowerCase = children.toLowerCase();

  return (
    <div className="container">
      <button
        className="button button--increment"
        onClick={handleIncrement}
        value={value}
        name={childrenToLowerCase}
      >
        Increment
      </button>
      <button
        className="button button--decrement"
        onClick={handleDecrement}
        value={value}
        name={childrenToLowerCase}
      >
        Decrement
      </button>
      <p
        className={
          `button__text ` +
          (lastUpdatedValue === childrenToLowerCase ? "underlined" : undefined)
        }
      >
        {children}
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
