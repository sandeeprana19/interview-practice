import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// Problem:
// Create a react component that allows users to input a password. It should toggle password visibility in a secure and accessible way along with a label indicating the visibility status. It should have live toggling using an eye icon.

// Requirements
// • The input must:
// Securely accept user-entered text.
// Have a placeholder: "Enter password".
// Be focusable and editable at all times.
// Always show the placeholder text when empty.

// • By default:
// Password should be hidden (masked).

// • Visibility toggle icon:
// Uses lucide-react icons.
// Shows EyeOff icon when the password is hidden.
// Shows Eye icon when the password is visible.

// • On clicking the icon:
// Toggle the visibility of the password between masked and unmasked.

// • Instantly update both:
// The icon (Eye + EyeOff).
// The label (described below).

// • A label must appear below the input field showing:
// "Password Hidden" when the password is masked.
// "Password Visible" when the password is unmasked.

// Data Test IDs (Required for Testing):
// • data-testid="password-input": The password input field
// • data-testid="toggle-icon": Element wrapping the eye icon used to toggle password visibility
// • data-testid="visibility-label": Text label showing whether password is visible or hidden

function TogglePassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick={handlePasswordVisibility}
        >
          {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {isPasswordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
