import React, { useState } from "react";

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
