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
    <div className="overflow-hidden text-center pt-10 flex flex-col items-center gap-y-5">
      <h1 className="text-2xl font-medium">Modal Popup</h1>
      <button
        onClick={handleOpen}
        className="bg-[rgba(128,128,128,0.2)] rounded-[5px] p-[10px] cursor-pointer"
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          data-testid="modal-backdrop"
          className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-50 flex items-center justify-center overflow-hidden"
          onMouseDown={handleClose}
        >
          <div
            className="rounded-[10px] p-[40px] bg-white w-[370px]"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <h1 className="font-bold">Modal Header</h1>
            <p className="mb-4 text-black text-base font-medium">
              This is the modal body
            </p>
            <button
              className="py-2 px-8 font-medium cursor-pointer bg-[rgba(128,128,128,0.2)] rounded-[5px]"
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
