import React from "react";
import PropTypes from "prop-types";

const SelectTimeButton = ({children, handleIncrement, handleDecrement, value}) => {
  return (
    <>
      <button onClick={handleIncrement} value={children}>
        Increment
      </button>
      <p>
        {children}: {value}
      </p>

      <button onClick={handleDecrement} value={children}>
        Decrement
      </button>
    </>
  );
};

SelectTimeButton.propTypes = {};

export default SelectTimeButton;