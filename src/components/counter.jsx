import React, { useState } from "react";

const Counter = (props) => {
  // const [value, setValue] = useState(props.value);
  const { value } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  // const handleIncrement = () => {
  //   // setValue((prevState) => prevState + 1);

  //   console.log("handleIncrement");
  // };

  // const handleDecrement = () => {
  //   console.log("handleDecrement");
  // };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement()}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement()}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm btn-m2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
