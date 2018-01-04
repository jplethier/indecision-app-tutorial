import React from "react";

import Option from "./Option";

const Options = (props) => (
  <div>
    <button onClick={props.onRemoveAll}>Remove All</button>
    {props.options.length > 0 ?
      <ol>
        {props.options.map((option, index) => (
          <Option
            key={index}
            label={option}
            onRemove={props.onRemoveOption} />
        ))}
      </ol> :
      <p>Please add an option to get started!</p>}
  </div>
);

export default Options;
