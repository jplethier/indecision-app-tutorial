import React from "react";

import Option from "./Option";

const Options = (props) => {
  const { options, onRemoveAll, onRemoveOption } = props;

  return (
    <div>
      <button onClick={onRemoveAll}>Remove All</button>
      {options.length > 0 ?
        <ol>
          {options.map((option, index) => (
            <Option
              key={index}
              label={option}
              onRemove={onRemoveOption} />
          ))}
        </ol> :
        <p>Please add an option to get started!</p>}
    </div>
  )
}

export default Options;
