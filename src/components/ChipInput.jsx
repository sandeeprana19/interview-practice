import React, { useState } from "react";

// Problem:
// Chips Input related question:

// In this task, you are asked to create a Chips Input component that allows users to
// input a series of tags or keywords. The component will display these tags as "chips"
// (small labels), which users can add and remove dynamically.

// Features:
// 1. Input Field: Users can type text into an input field.
// 2. Add Chips: When the user presses the "Enter" key, the typed text will be
// added as a new chip (tag). Empty or whitespace-only chips should not be added.
// 3. Remove Chips: Users can delete a chip by clicking the "X" button next to it.
// 4. Horizontal Display: The chips should be displayed in a horizontal list.
// 5. Persistence: The list of chips should be maintained even when the
// component re-renders.

// Important Points:
// 1. The input field should be of type text.
// 2. Button should be labeled "X" to delete chips
// 3. If two chips have the same name, deleting one should NOT delete both.
// 4. Make sure to use onKeyDown event handler instead of onKeyPress because onKeyPress is deprecated

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
      <h2 className="text-2xl">Chips Input</h2>
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
