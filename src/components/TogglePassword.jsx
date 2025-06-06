import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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
