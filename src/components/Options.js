import React from "react";

import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3>Your options</h3>
      <button
        className="button button--link"
        onClick={props.onRemoveAll}
      >
        Remove All
      </button>
    </div>
    {props.options.length == 0 &&
      <p className="widget__empty-message">
        Please add an option to get started!
      </p>}
    {props.options.map((option, index) => (
      <Option
        key={index}
        label={option}
        onRemove={props.onRemoveOption}
        count={index + 1}
      />
    ))}
  </div>
);

export default Options;
