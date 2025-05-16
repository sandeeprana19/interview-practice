import { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const updateProgressValue = (delta) =>
    setProgress((prev) => Math.max(0, Math.min(100, prev + delta)));

  const getProgressBgColor = () => {
    if (progress >= 80) return "green";
    if (progress >= 40) return "orange";
    return "red";
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ margin: "0" }}>ProgressBar</h2>
      <div
        style={{
          width: "100%",
          height: "25px",
          background: "#d3d3d3",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: getProgressBgColor(),
          }}
          id="testBgColor"
        ></div>
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            color: `${progress >= 80 ? "white" : "black"}`,
            fontWeight: 600,
          }}
        >
          {progress}%
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => updateProgressValue(-10)}
        >
          -10%
        </button>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => updateProgressValue(+10)}
        >
          +10%
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
