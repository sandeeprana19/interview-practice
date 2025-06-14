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
    <div className="flex flex-col items-center gap-y-5 pt-5">
      <h2 className="text-2xl font-medium">Chips Input</h2>
      <input
        type="text"
        value={chipInputValue}
        onChange={handleChipInputValue}
        onKeyDown={handleAddChip}
        placeholder="Type a chip and press tag"
        className="p-2 w-[200px] border border-[#cccccc] outline-none rounded-lg"
      />
      {chips.length !== 0 && (
        <div className="flex items-center justify-center gap-[10px]">
          {chips.map((chip) => (
            <div
              className="flex items-center justify-center gap-[5px] text-[16px] font-medium bg-[#d3d3d3] py-[5px] px-[10px] rounded-[30px]"
              key={chip.id}
            >
              <span>{chip.label}</span>
              <button
                onClick={() => handleDeleteChip(chip.id)}
                className="bg-transparent text-red-700 border-0 cursor-pointer"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChipsInput;
