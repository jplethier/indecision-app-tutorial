import React from "react";

const Option = (props) => (
  <div className="option">
    <p>{props.count}. {props.label}</p>
    <button
      className="button button--link"
      onClick={() => props.onRemove(props.label)}
    >
      Remove
    </button>
  </div>
);

export default Option;
