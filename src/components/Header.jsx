import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-[0.9375rem] px-[1.875rem] flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] fixed top-0 left-0 w-full h-[5rem] z-50">
      <ul className="flex items-center gap-[0.9375rem] list-none m-0 p-0">
        <li>
          <Link
            to="/"
            className="text-black decoration-0 text-base font-semibold"
          >
            ChipsInput
          </Link>
        </li>
        <li>
          <Link
            to="/progress-bar"
            className="text-black decoration-0 text-base font-semibold"
          >
            ProgressBar
          </Link>
        </li>
        <li>
          <Link
            to="/dark-mode-toggle"
            className="text-black decoration-0 text-base font-semibold"
          >
            DarkModeToggle
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
