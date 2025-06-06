import React, { useState } from "react";

function Modal() {
  // Step 1: Create a state variable isOpen and setIsOpen using useState

  // Step 2: Create functions handleOpen and handleClose to toggle modal visibility

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>

      <button
        style={{ padding: "10px", cursor: "pointer" }}
        className="bg-gray-300 rounded-sm"
      >
        Open Modal
      </button>

      {/* Step 4: Conditionally render the modal when isOpen is true */}
      {/* Modal should close when clicking the backdrop or the Close button */}
      {/* Modal content should not close when clicking inside */}
    </div>
  );
}

export default Modal;
