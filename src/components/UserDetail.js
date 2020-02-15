import React from "react";

const UserDetail = props => {
  return (
    <div className="user-detail">
      <div>
        <div className="header">
          {props.email}
          <img
            className="right floated ui avatar image"
            alt="avatar"
            src={props.avatar}
          />
        </div>
        <div className="meta">{props.jobTitle}</div>
      </div>
    </div>
  );
};

export default UserDetail;
