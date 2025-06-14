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
    <div className="text-center w-full max-w-full flex flex-col justify-center items-center pt-10">
      <h1 className="text-2xl font-medium text-[#22b691] mb-5">
        Toggle Password
      </h1>
      <div className="relative w-[290px]">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="p-[10px_35px_10px_10px] w-full text-base border border-[#cccccc] rounded-[6px] outline-none shadow-[0_2px_5px_rgba(0, 0, 0, 0.05)] bg-white"
          data-testid="password-input"
        />
        <span
          className="absolute right-[5px] top-1/2 z-10 -translate-1/2 cursor-pointer text-[#888888] hover:text-black"
          data-testid="toggle-icon"
          onClick={handlePasswordVisibility}
        >
          {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span
        className="block mt-[6px] text-[13px] text-[#888] text-left w-[280px]"
        data-testid="visibility-label"
      >
        {isPasswordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
