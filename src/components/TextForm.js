import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
  };

  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state

  return (
    <>
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
      <button className="btn btn-secondary mx-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-secondary " onClick={handleClearClick}>
        Clear Text
      </button>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
