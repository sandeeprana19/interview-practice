import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ChipInput = lazy(() => import("./components/ChipInput.jsx"));
const ProgressBar = lazy(() => import("./components/ProgressBar.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ChipInput />
          </Suspense>
        ),
      },
      {
        path: "/progress-bar",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProgressBar />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
