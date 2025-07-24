import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ChipInput = lazy(() => import("./components/ChipInput.jsx"));
const ProgressBar = lazy(() => import("./components/ProgressBar.jsx"));
const DarkModeToggle = lazy(() => import("./components/DarkModeToggle.jsx"));
const Sidebar = lazy(() => import("./components/Sidebar.jsx"));
const TogglePassword = lazy(() => import("./components/TogglePassword.jsx"));
const Modal = lazy(() => import("./components/Modal.jsx"));
const Calculator = lazy(() => import("./components/Calculator.jsx"));
const Error = lazy(() => import("./components/Error.jsx"));
const FocusInput = lazy(() => import("./components/FocusInput.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <ChipInput />
          </Suspense>
        ),
      },
      {
        path: "/progress-bar",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <ProgressBar />
          </Suspense>
        ),
      },
      {
        path: "/dark-mode-toggle",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <DarkModeToggle />
          </Suspense>
        ),
      },
      {
        path: "/tcs/sidebar",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <Sidebar />
          </Suspense>
        ),
      },
      {
        path: "/tcs/toggle-password",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <TogglePassword />
          </Suspense>
        ),
      },
      {
        path: "/tcs/modal",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading</h1>}>
            <Modal />
          </Suspense>
        ),
      },
      {
        path: "/tcs/calculator",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading</h1>}>
            <Calculator />
          </Suspense>
        ),
      },
      {
        path: "/infosys/focus-input",
        element: (
          <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
            <FocusInput />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
