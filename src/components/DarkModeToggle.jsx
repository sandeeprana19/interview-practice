import React, { useState } from "react";

// Problem:
// You have to build a simple Dark Mode Toggle component in React. The goal is to allow users to switch between light mode and dark mode by toggling a checkbox. The theme should visually update the background color, text and text color.

// Things To Do
// 1. State Management
// Add a useState hook to keep track of whether the app is in dark mode or light
// mode.
// 2. Toggle Function
// Implement the toggleTheme function to update the state when the checkbox is toggled.
// 3. Dynamic Class Application
// Apply the class dark-mode or light-mode to the parent <div> based on the value of state variable.
// 4. Text Label
// Update the <span className="mode-text"> to show "Dark Mode" or "Light Mode" depending on the current theme.
// Important Note
// • Apply the class dark-mode to the parent <div> when dark mode is active. Apply the class light-mode when light mode is active.

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="u-text--32 u-mb--30">Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
