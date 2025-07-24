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
                <details>
                  <summary className="text-black decoration-0 text-base font-semibold">
                    TCS
                  </summary>
                  <ul>
                    <li>
                      <Link
                        to="/tcs/sidebar"
                        className="text-black decoration-0 text-base font-semibold"
                      >
                        Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tcs/toggle-password"
                        className="text-black decoration-0 text-base font-semibold"
                      >
                        TogglePassword
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tcs/modal"
                        className="text-black decoration-0 text-base font-semibold"
                      >
                        Modal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/tcs/calculator"
                        className="text-black decoration-0 text-base font-semibold"
                      >
                        Calculator
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-black decoration-0 text-base font-semibold">
                    Infosys
                  </summary>
                  <ul>
                    <li>
                      <Link
                        to="/infosys/focus-input"
                        className="text-black decoration-0 text-base font-semibold"
                      >
                        FocusInput
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl">
            Interview Practice
          </Link>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
};

export default Header;
