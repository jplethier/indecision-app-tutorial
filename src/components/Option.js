import React from "react";

const Option = (props) => {
  const { label, onRemove } = props;

  return (
    <li>
      {label}
      <button onClick={() => onRemove(label)}>
        Remove
      </button>
    </li>
  )
}

export default Option;
