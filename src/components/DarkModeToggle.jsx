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
    <div
      className={`text-center h-[calc(100vh-64px)] w-full max-w-full flex flex-col justify-center items-center gap-y-5 ${
        darkMode ? "bg-[#121212] text-white" : "bg-[#f0f0f0] text-[#333333]"
      }`}
    >
      <h1 className="text-2xl font-medium">Dark Mode Toggle</h1>
      <div className="flex items-center justify-center gap-5">
        <label className="relative inline-block w-[60px] h-[34px]">
          <input
            type="checkbox"
            onChange={toggleTheme}
            className="opacity-0 w-0 h-0 peer"
          />
          <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#cccccc] transition-all rounded-[50px] before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:rounded-[50px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition-all peer-checked:bg-[#4caf50] peer-checked:before:translate-x-[26px]"></span>
        </label>
        <span className="text-lg font-bold text-inherit">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
