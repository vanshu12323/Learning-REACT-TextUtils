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

  const handleFindChange = (event) => {
    setFind(event.target.value);
  };

  const handleReplaceChange = (event) => {
    setReplace(event.target.value);
  };

  const handleSpeechClick = () => {
    const utterance = new SpeechSynthesisUtterance(text);

    // Select a voice
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[4]; // Choose a specific voice

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  const replaceAll = () => {
    let t = text.split(" ");
    let ans = "";
    for (let i = 0; i < t.length; i++) {
      if (t[i] === find) {
        ans += replace + " ";
      } else {
        ans += t[i] + " ";
      }
    }
    setText(ans);
  };

  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");

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
      {/* text to speech */}
      <button className="btn btn-primary mx-3" onClick={handleSpeechClick}>
        Text to speech
      </button>

      {/* find and replace */}
      <div className="container my-3">
        <div className="form-floating mb-3">
          <input
            value={find}
            onChange={handleFindChange}
            type="text"
            className="form-control"
            id="find"
            placeholder="find"
          />
          <label htmlFor="find">Find</label>
        </div>
        <div className="form-floating">
          <input
            value={replace}
            onChange={handleReplaceChange}
            type="text"
            className="form-control"
            id="replace"
            placeholder="replace"
          />
          <label htmlFor="replace">Replace</label>
        </div>
        <button className="btn btn-primary my-3" onClick={replaceAll}>
          Replace
        </button>
      </div>

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
