import React from "react";
import UserDetail from "./UserDetail";
import FlagCard from "./FlagCard";

const PersonCard = props => {
  return (
    <div className="person-card card">
      <div className="content">
        <UserDetail {...props} />
        <FlagCard {...props} />
      </div>
    </div>
  );
};

export default PersonCard;
