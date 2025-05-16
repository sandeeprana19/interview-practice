import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="c-header">
      <ul className="c-nav">
        <li>
          <Link to="/" className="c-nav-link">
            Chips Input
          </Link>
        </li>
        <li>
          <Link to="/progress-bar" className="c-nav-link">
            ProgressBar
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
