import { useState } from "react";
import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b3035dd";
      document.body.style.color = "#d6d6d4";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [theme, setTheme] = useState("light");
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    let t = e.target.value;
    let capi = t.charAt(0).toUpperCase(t[0]) + t.slice(1);
    document.title = "TextUtils - " + capi + " mode";
    if (capi !== "Select Theme") {
      showAlert(capi + " mode has been enabled", "success");
    }
    if (t === "dark") {
      document.body.style.backgroundColor = "#2b3035dd";
      document.body.style.color = "#d6d6d4";
    } else if (t === "light") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else if (t === "pink") {
      document.body.style.backgroundColor = "#BB9CC0";
      document.body.style.color = "#FED9ED";
    } else if (t === "blue") {
      document.body.style.backgroundColor = "#363062";
      document.body.style.color = "#F5E8C7";
    } else if (t === "green") {
      document.body.style.backgroundColor = "#13160A";
      document.body.style.color = "#ECEEE3";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="About Us"
          mode={mode}
          theme={theme}
          toggleMode={toggleMode}
        />
        {/* SELECTING THEME */}
        <select
          className="form-select my-3 mx-2"
          aria-label="Default select example"
          style={{ width: "200px" }}
          onChange={handleThemeChange}
        >
          <option defaultValue="light">Select Theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* exact path -> complete matching */}
            {/* path -> partial matching */}
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                  theme={theme}
                />
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={<About theme={theme} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
