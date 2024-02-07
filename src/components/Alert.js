import React from "react";

export default function Alert(props) {
  return (
    // if props.alert null return null
    // else return alert box
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{
          position: "absolute",
          top: 10,
          left: "35vw",
          right: "35vw",
          textAlign: "center",
        }}
      >
        <strong>{props.alert.type}</strong> : {props.alert.msg}
      </div>
    )
  );
}
