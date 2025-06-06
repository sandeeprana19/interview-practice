import React, { useState } from "react";
import { Menu } from "lucide-react";

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
