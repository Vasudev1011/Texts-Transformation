import React from "react";

export default function (props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.alert.msg}: {props.alert.type}
      </div>
    )
  );
}
