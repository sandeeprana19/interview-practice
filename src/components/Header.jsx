import React from "react";
import { Link } from "react-router-dom";
import { AlignLeft } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="navbar bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <AlignLeft />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
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
              <li>
                <Link
                  to="/toggle-password"
                  className="text-black decoration-0 text-base font-semibold"
                >
                  TogglePassword
                </Link>
              </li>
              <li>
                <Link
                  to="/sidebar"
                  className="text-black decoration-0 text-base font-semibold"
                >
                  Sidebar
                </Link>
              </li>
              <li>
                <Link
                  to="/modal"
                  className="text-black decoration-0 text-base font-semibold"
                >
                  Modal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Interview Practice</a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Header;
