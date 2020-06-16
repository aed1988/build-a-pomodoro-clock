import React from "react";
import PropTypes from "prop-types";

const SelectTimeButton = ({children, handleIncrement, handleDecrement, value}) => {
  return (
    <>
      <button onClick={handleIncrement} value={value} name={children.toLowerCase()}>
        Increment
      </button>
      <p>
        {children}: {value}
      </p>

      <button onClick={handleDecrement} value={value} name={children.toLowerCase()}>
        Decrement
      </button>
    </>
  );
};

SelectTimeButton.propTypes = {
  children: PropTypes.string,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default SelectTimeButton;
