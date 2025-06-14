import React, { useState } from "react";
import { Menu } from "lucide-react";

// Problem
// Create a React sidebar component that can be toggled open or closed with a menu button.
// The sidebar appears on the right side of the screen and includes navigation items with hover effects.

// Requirements
// • The interface must include:
// == A sidebar positioned on the right side of the viewport.
// == A toggle button (with a menu icon) that is always visible and vertically centered on the right edge of the screen.
// == Use "Menu" icon form lucide-react

// • Default Behavior:
// == The sidebar is hidden by default.
// == The toggle button remains fixed and accessible at all times.

// • Toggle Functionality:
// == Clicking the toggle button opens or closes the sidebar.
// == The sidebar should slide in and out from the right with a smooth transition effect.

// • Sidebar Content:
// == When open, the sidebar displays a vertical list of navigation items:
// == Home
// == About
// == Services
// == Contact
// == Each navigation item should have a clear and smooth hover effect for better user interaction.

// Data Test IDs (required for testing):
// • data-testid="sidebar" — sidebar container div
// • data-testid="btn-toggle" — toggle button element
// • data-testid="icon-menu" — menu icon inside toggle button
// • data-testid="nav-menu" — container for nav items when sidebar is open
// • data-testid="nav-item-home" — nav item Home
// • data-testid="nav-item-about" — nav item About
// • data-testid="nav-item-services" — nav item Services
// • data-testid="nav-item-contact" — nav item Contact

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`fixed right-0 h-screen w-[280px] bg-linear-[135deg,#4b6cb7,#182848] text-[#f0f0f5] pt-[60px] transition-all font-sans z-50 ${
        !isSidebarOpen
          ? "shadow-[-2px_0_12px_rgba(0, 0, 0, 0.3)] translate-x-full"
          : "translate-x-0 shadow-[-4px_0_20px_rgba(0, 0, 0, 0.5)]"
      }`}
      data-testid="sidebar"
    >
      <button
        className="absolute top-[15px] -left-[60px] bg-[#4b6cb7] border-0 rounded-[50%] p-[12px] cursor-pointer text-[#f0f0f5] shadow-[0_4px_8px_rgba(75, 108, 183, 0.6)] transition-all flex items-center justify-center hover:bg-[#182848] scale-[1.1]"
        data-testid="btn-toggle"
        onClick={handleSidebarToggle}
      >
        <Menu data-testid="icon-menu" />
      </button>
      {isSidebarOpen && (
        <nav className="w-full" data-testid="nav-menu">
          <ul className="list-none py-0 px-5 m-0">
            <li
              className="py-[15px] px-5 my-2 mx-0 rounded-lg font-bold text-lg cursor-pointer text-[#f0f0f5] transition-all select-none relative overflow-hidden after:content-[''] after:absolute after:bottom-2 after:left-5 after:h-[2px] after:w-[0%] after:bg-[#a8c0ff] after:transition-all after:rounded-[2px] hover:after:w-[60%] hover:text-white hover:text-shadow-[0_0_5px_#a8c0ff]"
              data-testid="nav-item-home"
            >
              Home
            </li>
            <li
              className="py-[15px] px-5 my-2 mx-0 rounded-lg font-bold text-lg cursor-pointer text-[#f0f0f5] transition-all select-none relative overflow-hidden after:content-[''] after:absolute after:bottom-2 after:left-5 after:h-[2px] after:w-[0%] after:bg-[#a8c0ff] after:transition-all after:rounded-[2px] hover:after:w-[60%] hover:text-white hover:text-shadow-[0_0_5px_#a8c0ff]"
              data-testid="nav-item-about"
            >
              About
            </li>
            <li
              className="py-[15px] px-5 my-2 mx-0 rounded-lg font-bold text-lg cursor-pointer text-[#f0f0f5] transition-all select-none relative overflow-hidden after:content-[''] after:absolute after:bottom-2 after:left-5 after:h-[2px] after:w-[0%] after:bg-[#a8c0ff] after:transition-all after:rounded-[2px] hover:after:w-[60%] hover:text-white hover:text-shadow-[0_0_5px_#a8c0ff]"
              data-testid="nav-item-services"
            >
              Services
            </li>
            <li
              className="py-[15px] px-5 my-2 mx-0 rounded-lg font-bold text-lg cursor-pointer text-[#f0f0f5] transition-all select-none relative overflow-hidden after:content-[''] after:absolute after:bottom-2 after:left-5 after:h-[2px] after:w-[0%] after:bg-[#a8c0ff] after:transition-all after:rounded-[2px] hover:after:w-[60%] hover:text-white hover:text-shadow-[0_0_5px_#a8c0ff]"
              data-testid="nav-item-contact"
            >
              Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
