import React from "react";

const FlagCard = props => {
  const flagUrl = `https://www.countryflags.io/${props.countryCode}/flat/64.png`;

  return (
    <div
      className="flag-card"
      style={{ display: "flex", alignItems: "center", paddingTop: "15px" }}
    >
      <div className="image" style={{ minWidth: "64px", marginRight: "10px" }}>
        <img className="ui tiny image" alt="flag" src={flagUrl} />
      </div>
      <div className="description">{props.content}</div>
    </div>
  );
};

export default FlagCard;
