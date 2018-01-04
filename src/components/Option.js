import React from "react";

const Option = (props) => (
  <li>
    {props.label}
    <button onClick={() => props.onRemove(props.label)}>
      Remove
    </button>
  </li>
);

export default Option;
