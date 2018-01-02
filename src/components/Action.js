import React from "react";

const Action = (props) => {
  const { hasOptions, onClick } = props;

  return (
    <div>
      <button disabled={!hasOptions} onClick={onClick}>What should I do?</button>
    </div>
  )
}

export default Action;
