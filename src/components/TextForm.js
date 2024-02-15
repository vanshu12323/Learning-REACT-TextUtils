import React, { useState, useEffect } from "react";

export default function TextForm(props) {
  const textLength = () => {
    let s = text.split(/\s+/);
    let l = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== "") {
        l++;
      }
    }
    return l;
  };

  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
    if (textLength() > 0) {
      props.showAlert("Converted to uppercase", "success");
    }
  };

  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
    if (textLength() > 0) {
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const handleClearClick = () => {
    setText("");
    if (textLength() > 0) {
      props.showAlert("Text cleared", "success");
    }
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

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    if (textLength() > 0) {
      props.showAlert("Copied to clipboard", "success");
    }
  };

  const removeExtraSpaces = () => {
    let t = text.split(/[ ]+/); // 1 or more space
    setText(t.join(" "));
    props.showAlert("Extra spaces removed", "success");
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
    if (textLength() > 0) {
      props.showAlert("Replaced all " + find + " with " + replace, "success");
    }
  };

  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");

  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state

  useEffect(() => {
    toggleMyStyle(); // Call toggleMyStyle whenever theme changes
  }, [props.theme]); // Run this effect whenever props.theme changes

  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  // change myStyle based on theme
  const toggleMyStyle = () => {
    let t = props.theme;
    if (t === "light") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
      });
    } else if (t === "dark") {
      setMyStyle({
        backgroundColor: "#2b3035dd",
        color: "#d6d6d4",
      });
    } else if (t === "pink") {
      setMyStyle({
        backgroundColor: "#67729D",
        color: "#E7BCDE",
      });
    } else if (t === "blue") {
      setMyStyle({
        backgroundColor: "#435585",
        color: "#F5E8C7",
      });
    } else if (t === "green") {
      setMyStyle({
        backgroundColor: "#D0DC9F",
        color: "#6D7E22 ",
      });
    }
  };

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
          style={myStyle}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-secondary mx-3 my-3" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-secondary my-3" onClick={handleClearClick}>
        Clear Text
      </button>
      {/* text to speech */}
      <button className="btn btn-primary mx-3 my-3" onClick={handleSpeechClick}>
        Text to speech
      </button>
      {/* copy to clipboard */}
      <button className="btn btn-primary my-3" onClick={handleCopyClick}>
        Copy
      </button>
      {/* remove extra spaces */}
      <button className="btn btn-primary mx-3 my-3" onClick={removeExtraSpaces}>
        Remove Extra Spaces
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
            style={myStyle}
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
            style={myStyle}
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
          {textLength()} words and {text.length} characters
        </p>
        <p>{textLength() * 0.008} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview"}</p>
      </div>
    </>
  );
}
