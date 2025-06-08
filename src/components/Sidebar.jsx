import React, { useState } from "react";
import { Menu } from "lucide-react";

// Problem
// Create a React sidebar component that can be toggled open or closed with a menu button. The sidebar appears on the right side of the screen and includes navigation items with hover effects.

// Requirements

// • The interface must include:
// A sidebar positioned on the right side of the viewport.
// A toggle button (with a menu icon) that is always visible and vertically centered on the right edge of the screen.
// Use "Menu" icon form lucide-react
// Default Behavior:
// The sidebar is hidden by default.
// The toggle button remains fixed and accessible at all times.
// Toggle Functionality:
// Clicking the toggle button opens or closes the sidebar.
// The sidebar should slide in and out from the right with a smooth transition effect.
// • Sidebar Content:
// When open, the sidebar displays a vertical list of navigation items:
// Home
// About
// Services
// Contact
// Each navigation item should have a clear and smooth hover effect for better user interaction.
// Data Test IDs (required for testing):
// • data-testid="sidebar" — sidebar container div
// • data-testid="btn-toggle" — toggle button element
// • data-testid="icon-menu".
// • data-testid="nav-menu"
// menu icon inside toggle button
// container for nav items when sidebar is open
// • data-testid="nav-item-home"
// -nav item Home
// • data-testid="nav-item-about" — nav item About
// • data-testid="nav-item-services" - nav item Services
// • data-testid="nav-item-contact" - nav item Contact

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen && "open"}`} data-testid="sidebar">
      <button
        className="toggle-btn"
        data-testid="btn-toggle"
        onClick={handleSidebarToggle}
      >
        <Menu data-testid="icon-menu" />
      </button>
      {isSidebarOpen && (
        <nav className="nav-menu" data-testid="nav-menu">
          <ul className="nav-list">
            <li className="nav-item" data-testid="nav-item-home">
              Home
            </li>
            <li className="nav-item" data-testid="nav-item-about">
              About
            </li>
            <li className="nav-item" data-testid="nav-item-services">
              Services
            </li>
            <li className="nav-item" data-testid="nav-item-contact">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
