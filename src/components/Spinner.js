import React from "react";

const Spinner = props => {
  return (
    <div className="spinner ui active inverted dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Searching"
};

export default Spinner;
