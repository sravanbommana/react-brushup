import React from "react";
import PropTypes from "prop-types";

const Counter = ({ count, incrementCount, reset, decrementCount }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">Cont: {count}</div>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-row">
          <button className="p-2 m-2" onClick={incrementCount}>Increment Count</button>
          <button className="p-2 m-2" onClick={decrementCount}>Decrement Count</button>
          <button className="p-2 m-2" onClick={reset}>Reset Count</button>
        </div>
      </div>
    </div>
  );
};

Counter.prototype = {
  count: PropTypes.Number,
  incrementCount: PropTypes.func,
};
export default Counter;
