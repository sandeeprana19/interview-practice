import React, { useState } from "react";

// Problem:
// Create a simple, functional modal popup in React with clear open/close behavior. This component demonstrates UI state management with useState, conditional rendering, and handling user interactions such as clicking outside the modal or on the close button.

// Component Details

// You need to implement a Modal component that:
// 1. Displays a button labeled "Open Modal".
// 2. Opens the modal when the "Open Modal" button is clicked.
// 3. Displays modal content with the following:
// A heading: "Modal Header"
// A paragraph: "This is the modal body"
// A "Close" button inside the modal
// 4. Closes the modal when:
// The "Close" button is clicked
// The user clicks outside the modal (on the backdrop)
// 5. Does not close the modal when clicking inside the modal content
// 6. The outermost div that wraps the modal (when visible) must have data- testid="modal-backdrop" for testing.

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div
      style={{
        overflow: "hidden",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>Modal Popup</h1>

      <button
        onClick={handleOpen}
        style={{
          background: "rgba(128,128,128,0.2)",
          borderRadius: "5px",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          data-testid="modal-backdrop"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            zIndex: "51",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          onMouseDown={handleClose}
        >
          <div
            style={{
              borderRadius: "10px",
              padding: "40px",
              background: "white",
              width: "370px",
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h1
              style={{
                fontWeight: "600",
              }}
            >
              Modal Header
            </h1>
            <p
              style={{
                marginBottom: "16px",
                color: "black",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              This is the modal body
            </p>
            <button
              style={{
                padding: "8px 32px",
                fontWeight: "500",
                cursor: "pointer",
                background: "rgba(128,128,128,0.2)",
              }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
