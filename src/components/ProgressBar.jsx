import { useState } from "react";

// Problem:
// Progress Bar related question:

// Create a Progress Bar Component in React that visually represents a single
// progress value. Users should be able to increment or decrement progress
// buttons. Make sure to use inline css.

// Requirements:
// 1. Display one progress bar.
// 2. The bar should reflect a numeric progress (0—100%).
// 3. Include buttons labeled '+10%' and '-10%' to increase or decrease the bar's
// value.
// 4. Prevent values from going below 0% or above 100%.
// 5. Change bar color based on value (e.g., red, orange, green).
// 6. Color is selected based on thresholds:
// » Red if less than 40%
// » Orange if between 40-79%
// » Green if 80% or more

// Constraints & Edge Cases:
// » Constraint 1: Progress must stay between 0 and 100.
// » Constraint 2: The background color-changing div must have an
// id="testBgColor" for testing the background color of progress bar.
// » Edge Case 1: If decrementing would take a value below 0, clamp it to 0.
// » Edge Case 2: If incrementing would take a value above 100, clamp it to 100.

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgressValue = (delta) =>
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));

  const getProgressBgColor = () => {
    if (progress >= 80) return "bg-green-600";
    if (progress >= 40) return "bg-orange-600";
    return "bg-red-600";
  };

  return (
    <div className="flex flex-col gap-5 my-0 mx-auto max-w-[400px]">
      <h2 className="text-2xl m-0">ProgressBar</h2>
      <div className="w-full h-[25px] bg-[#d3d3d3] rounded-[10px] relative overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full ${getProgressBgColor()}`}
          id="testBgColor"
        ></div>
        <span
          className={`absolute top-1/2 left-1/2 -translate-1/2 text-${
            progress >= 60 ? "white" : "black"
          } font-bold`}
        >
          {progress}%
        </span>
      </div>
      <div
        className="flex items-center gap-[10px]"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <button
          className="cursor-pointer bg-gray-200 py-2 px-3 rounded-lg"
          onClick={() => updateProgressValue(-10)}
        >
          -10%
        </button>
        <button
          className="cursor-pointer bg-gray-200 py-2 px-3 rounded-lg"
          onClick={() => updateProgressValue(+10)}
        >
          +10%
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
