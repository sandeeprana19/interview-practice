import React, { useState } from "react";
function ChipsInput() {
  const [chipInputValue, setChipInputValue] = useState("");
  const [chipIdCounter, setChipIdCounter] = useState(0);
  const [chips, setChips] = useState([]);

  const handleChipInputValue = (event) => {
    setChipInputValue(event.target.value);
  };

  const handleAddChip = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      const newChip = {
        id: chipIdCounter,
        label: chipInputValue,
      };

      setChips([...chips, newChip]);
      setChipIdCounter(chipIdCounter + 1);
      setChipInputValue("");
    }
  };

  const handleDeleteChip = (chipIdToDelete) => {
    setChips(chips.filter((chip) => chip.id !== chipIdToDelete));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        value={chipInputValue}
        onChange={handleChipInputValue}
        onKeyDown={handleAddChip}
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {chips.map((chip) => (
          <div
            key={chip.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              fontSize: "14px",
              background: "#d3d3d3",
              padding: "5px 10px",
              borderRadius: "30px",
            }}
          >
            <span>{chip.label}</span>
            <button
              onClick={() => handleDeleteChip(chip.id)}
              style={{
                color: "red",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
