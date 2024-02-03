import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    console.log("Uppercase was clicked");
    setText(new_text);
  };

  const handleOnChange = (event) => {
    console.log("handleOnChange clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
